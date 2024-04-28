import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { LayoutEditorComponent } from '@app1/components/doc-info/admin/layout/layout-editor.component';
import { OpeningHoursComponent } from '@app1/components/doc-info/admin/opening-hours/opening-hours.component';
import { DocInfoItem, DocInfoModel } from '@app1/components/doc-info/doc-info.model';
import { PosterComponent } from 'jpd-core';

@Component({
  selector: 'app-doc-info-editor',
  templateUrl: './doc-info-editor.component.html',
  styleUrls: ['./doc-info-editor.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CdkDrag, CdkDropList, CdkDropListGroup, MatTabGroup, MatTab, LayoutEditorComponent, PosterComponent, OpeningHoursComponent]
})
export class DocInfoEditorComponent implements OnInit {

  top: DocInfoItem[];
  bottom: DocInfoItem[];

  constructor(private model: DocInfoModel) { }

  drop(event: CdkDragDrop<DocInfoItem[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    this.top = this.model.getHighInfos();
    this.bottom = this.model.getLowInfos();
  }
}
