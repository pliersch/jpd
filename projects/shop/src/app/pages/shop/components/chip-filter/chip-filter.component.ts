import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Tag, ToggleTagAction } from '@shop/pages/shop/store/tags/tag.model';

@Component({
  selector: 'shop-chip-filter',
  imports: [CommonModule, MatChipListbox, MatChip, MatSlideToggle],
  templateUrl: './chip-filter.component.html',
  styleUrl: './chip-filter.component.scss',
})
export class ChipFilterComponent {
  readonly tags = input.required<Tag[]>();

  readonly toggleTagEvent = output<ToggleTagAction>();

  existActiveTags = false;

  deactivateTags(): void {
    this.existActiveTags = false;
    const ids = this.tags().map((tag) => tag.id);
    this.toggleTagEvent.emit({ ids, active: false });
  }

  toggleTag(tagId: number, active: boolean): void {
    this.toggleTagEvent.emit({ ids: [tagId], active: active });
  }
}
