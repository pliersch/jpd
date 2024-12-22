import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { Tag } from '../../store/model';

@Component({
    selector: 'a4w-chip-filter',
    imports: [CommonModule, MatChipListbox, MatChip],
    templateUrl: './chip-filter.component.html',
    styleUrl: './chip-filter.component.scss'
})
export class ChipFilterComponent {

  @Input({required: true})
  tags: Tag[];

  @Output()
  tagChangeEvent = new EventEmitter<Tag[]>();

  areActiveTags = false;

  deactivateTags(): void {
    for (const tag of this.tags) {
      tag.active = false;
    }
    this.areActiveTags = false;
    this.tagChangeEvent.emit([]);
  }

  toggleTag(tagName: string): void {
    const tagItem = this.tags.find(item => item.name === tagName);
    if (tagItem) {
      tagItem.active = !tagItem.active;
    }
    const activeTags = this.tags.filter(item => item.active);
    this.areActiveTags = activeTags.length > 0;
    this.tagChangeEvent.emit(activeTags);
  }
}
