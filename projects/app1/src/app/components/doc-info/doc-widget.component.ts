import { Component, inject, OnDestroy, OnInit, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DocOpeningStore } from '@app1/components/doc-info/admin/opening-hours/doc-opening.store';
import { DocVacationStore } from '@app1/components/doc-info/admin/vacation/doc-vacation.store';
import { DocWidgetService } from '@app1/components/doc-info/store/doc-widget.service';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { BaseWidgetComponent } from '@app1/components/doc-info/widgets/base/base-widget.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-doc-info',
    imports: [
        BaseWidgetComponent,
        MatButton
    ],
    templateUrl: './doc-widget.component.html',
    styleUrl: './doc-widget.component.scss'
})
export class DocWidgetComponent implements OnInit, OnDestroy {

  readonly editChange = output();

  widgetStore = inject(DocWidgetStore);
  readonly vacationStore = inject(DocVacationStore);
  readonly openingStore = inject(DocOpeningStore);
  private service = inject(DocWidgetService);
  private subscription: Subscription;

  enableEditMode(): void {
    this.editChange.emit();
  }

  ngOnInit(): void {
    this.subscription = this.service.items$
      .subscribe(item => {
        this.widgetStore.updateBySse(item);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
