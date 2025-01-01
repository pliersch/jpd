import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, output, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  WaitingTimeComponent
} from '@app1/components/doc-info/admin/ waiting-time/waiting-time.component';
import {
  LayoutEditorComponent
} from '@app1/components/doc-info/admin/layout/layout-editor.component';
import {
  OpeningHoursComponent
} from '@app1/components/doc-info/admin/opening-hours/opening-hours.component';
import { VacationComponent } from '@app1/components/doc-info/admin/vacation/vacation.component';
import { PosterComponent } from 'jpd-core';
import { BreakpointService, Dimension } from '../../../../../../jpd-core/src/lib/common';

@Component({
    selector: 'app-doc-info-editor',
    templateUrl: './doc-widget-editor.component.html',
    styleUrls: ['./doc-widget-editor.component.scss'],
  imports: [MatButtonModule, MatTabGroup, MatTab, LayoutEditorComponent, PosterComponent, OpeningHoursComponent, NgTemplateOutlet, VacationComponent, WaitingTimeComponent]
})
export class DocWidgetEditorComponent implements OnInit {

  readonly layoutEditor = viewChild(LayoutEditorComponent);

  readonly saveChanges = output();

  isSmall = signal(false);

  constructor(protected breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe(dimension => {
      this.isSmall.set(dimension === Dimension.XSmall);
    });
  }

  onClickSave(): void {
    this.layoutEditor()!.saveChanges();
    this.saveChanges.emit();
  }

  protected readonly Dimension = Dimension;
}
