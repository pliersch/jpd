import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DocWidgetItem } from '@app1/components/doc-info/store/doc-widget.model';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';

@Component({
  selector: 'app-doc-layout-editor',
  templateUrl: './layout-editor.component.html',
  styleUrls: ['./layout-editor.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CdkDrag, CdkDropList, CdkDropListGroup]
})
export class LayoutEditorComponent implements OnInit {

  high: DocWidgetItem[];
  low: DocWidgetItem[];
  none: DocWidgetItem[];

  changedWidgets: DocWidgetItem[] = [];

  readonly store = inject(DocWidgetStore);

  drop(event: CdkDragDrop<DocWidgetItem[]>): void {
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
    this.high = JSON.parse(JSON.stringify(this.store.getHighWidgets()));
    this.low = JSON.parse(JSON.stringify(this.store.getLowWidgets()));
    this.none = JSON.parse(JSON.stringify(this.store.getAvailableWidgets()));
  }

  private updateModel(): void {
    this.high.forEach((item: DocWidgetItem) => {
      item.visibility = 'high';
    });
    this.low.forEach((item: DocWidgetItem) => {
      item.visibility = 'low';
    });
    this.none.forEach((item: DocWidgetItem) => {
      item.visibility = 'none';
    });

    const allWidgets = this.high.concat(this.low).concat(this.none);

    this.changedWidgets = [];
    this.store.widgetsEntities().forEach(widget => {
      const current = allWidgets.find(w => w.id === widget.id);
      if (current!.visibility !== widget.visibility) {
        this.changedWidgets.push(current!);
      }
    });
  }

  saveChanges(): void {
    if (this.changedWidgets.length > 0) {
      for (const changedWidget of this.changedWidgets) {
        this.store.update(changedWidget);
      }
    }
  }

}
