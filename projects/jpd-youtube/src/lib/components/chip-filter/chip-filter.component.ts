import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { TagItem } from '../../model';
import { TAGS } from '../../tags';

@Component({
  selector: 'a4w-chip-filter',
  standalone: true,
  imports: [CommonModule, MatChipListbox, MatChip],
  templateUrl: './chip-filter.component.html',
  styleUrl: './chip-filter.component.scss',
})
export class ChipFilterComponent {

  @Output()
  tagChangeEvent = new EventEmitter<string[]>();

  availableTags: TagItem[] = TAGS;

  areActiveTags = false;

  deactivateTags(): void {
    for (const tag of this.availableTags) {
      tag.active = false;
    }
    this.areActiveTags = false;
    this.tagChangeEvent.emit([]);
  }

  toggleTag(tagName: string) {
    const tagItem = this.availableTags.find(item => item.name === tagName);
    if (tagItem) {
      tagItem.active = !tagItem.active;
    }
    const activeTags = this.availableTags.filter(item => item.active);
    this.areActiveTags = activeTags.length > 0;
    const activeTagNames = activeTags.map(a => a.name);
    this.tagChangeEvent.emit(activeTagNames);
  }
}
