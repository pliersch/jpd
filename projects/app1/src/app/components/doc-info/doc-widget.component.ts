import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DocWidgetService } from '@app1/components/doc-info/store/doc-widget.service';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { DefaultWidgetComponent } from '@app1/components/doc-info/widgets/default/default-widget.component';
import { formatDistance } from 'date-fns';
import { de } from 'date-fns/locale';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doc-info',
  standalone: true,
  imports: [
    MatIcon,
    DefaultWidgetComponent,
    MatButton
  ],
  templateUrl: './doc-widget.component.html',
  styleUrl: './doc-widget.component.scss'
})
export class DocWidgetComponent implements OnInit, OnDestroy {

  @Output() editChange: EventEmitter<void> = new EventEmitter();

  readonly store = inject(DocWidgetStore);
  readonly service = inject(DocWidgetService);
  private subscription: Subscription;

  lastUpdate = '';

  enableEditMode(): void {
    this.editChange.emit();
  }

  ngOnInit(): void {
    const time = formatDistance(
      new Date(1986, 3, 4, 11, 32, 0),
      new Date(1986, 3, 4, 10, 32, 0),
      {locale: de}
    );
    this.lastUpdate = `Letzte Änderung: vor ${time}`;

    this.subscription = this.service.items$
      .subscribe(item => {
        this.store.updateBySse(item);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
