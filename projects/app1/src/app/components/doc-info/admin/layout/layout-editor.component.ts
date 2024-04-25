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
import { DocInfoItem, DocInfoModel } from '@app1/components/doc-info/doc-info.model';

@Component({
  selector: 'app-doc-layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CdkDrag, CdkDropList, CdkDropListGroup]
})
export class LayoutEditorComponent implements OnInit {

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
    this.updateModel();
  }

  ngOnInit(): void {
    this.top = this.model.getHighInfos();
    this.bottom = this.model.getLowInfos();
  }

  private updateModel(): void {
    this.top.forEach((item: DocInfoItem) => {item.priority = 'high'})
    this.bottom.forEach((item: DocInfoItem) => {item.priority = 'low'})
    const items = this.top.concat(this.bottom);
    // for (let i = 0; i < this.top.length; i++) {
    //   items[i].priority = i;
    // }
    this.model.setInfos(items);
  }
}
