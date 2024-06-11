import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DocWidgetService } from '@app1/components/doc-info/store/doc-widget.service';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { BaseWidgetComponent } from '@app1/components/doc-info/widgets/base/base-widget.component';
import { formatDistance } from 'date-fns';
import { de } from 'date-fns/locale';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doc-info',
  standalone: true,
  imports: [
    MatIcon,
    BaseWidgetComponent,
    MatButton,
    DatePipe
  ],
  templateUrl: './doc-widget.component.html',
  styleUrl: './doc-widget.component.scss'
})
export class DocWidgetComponent implements OnInit, OnDestroy {

  @Output() editChange: EventEmitter<void> = new EventEmitter();

  readonly store = inject(DocWidgetStore);
  private service = inject(DocWidgetService);
  private subscription: Subscription;

  lastUpdate = signal('');
  lastUpdate$ = toObservable(this.store.getLastUpdate)

  enableEditMode(): void {
    this.editChange.emit();
  }

  ngOnInit(): void {
    this.lastUpdate$.subscribe(date => {
      if (date) {
        const time = formatDistance(date, new Date(), {locale: de});
        this.lastUpdate.set(`Letzte Änderung: vor ${time}`);
      }
    })

    this.subscription = this.service.items$
      .subscribe(item => {
        this.store.updateBySse(item);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
