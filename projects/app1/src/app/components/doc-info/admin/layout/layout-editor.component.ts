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
import { DocInfoItemModel, DocInfoModel } from '@app1/components/doc-info/doc-info.model';

@Component({
  selector: 'app-doc-layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CdkDrag, CdkDropList, CdkDropListGroup]
})
export class LayoutEditorComponent implements OnInit {

  top: DocInfoItemModel[];
  bottom: DocInfoItemModel[];
  available: DocInfoItemModel[];

  constructor(private model: DocInfoModel) { }

  drop(event: CdkDragDrop<DocInfoItemModel[]>): void {
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
    this.updateModel();
  }

  ngOnInit(): void {
    this.top = this.model.getHighInfos();
    this.bottom = this.model.getLowInfos();
    this.available = this.model.getAvailableInfos();
  }

  private updateModel(): void {
    this.top.forEach((item: DocInfoItemModel) => {
      item.priority = 'high';
      item.active = true;
    });
    this.bottom.forEach((item: DocInfoItemModel) => {
      item.priority = 'low';
      item.active = true;
    });
    this.available.forEach((item: DocInfoItemModel) => {item.active = false})
    const items = this.top.concat(this.bottom).concat(this.available);
    this.model.setInfos(items);
  }
}
