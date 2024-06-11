import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { LayoutEditorComponent } from '@app1/components/doc-info/admin/layout/layout-editor.component';
import { OpeningHoursComponent } from '@app1/components/doc-info/admin/opening-hours/opening-hours.component';
import { PosterComponent } from 'jpd-core';
import { BreakpointService, Dimension } from '../../../../../../jpd-core/src/lib/common';

@Component({
  selector: 'app-doc-info-editor',
  templateUrl: './doc-widget-editor.component.html',
  styleUrls: ['./doc-widget-editor.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTabGroup, MatTab, LayoutEditorComponent, PosterComponent, OpeningHoursComponent, AsyncPipe, NgTemplateOutlet]
})
export class DocWidgetEditorComponent implements OnInit {

  @ViewChild(LayoutEditorComponent)
  layoutEditor: LayoutEditorComponent;

  @Output() saveChanges: EventEmitter<void> = new EventEmitter();

  isSmall = signal(false);

  constructor(protected breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe(dimension => {
      this.isSmall.set(dimension === Dimension.XSmall);
    });
  }

  onClickSave(): void {
    this.layoutEditor.saveChanges();
    this.saveChanges.emit();
  }

  protected readonly Dimension = Dimension;
}
