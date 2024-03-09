import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'a4w-horizontal-virtual-scroll',
  standalone: true,
  imports: [CommonModule, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport, CdkVirtualForOf],
  templateUrl: './horizontal-virtual-scroll.component.html',
  styleUrl: './horizontal-virtual-scroll.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalVirtualScrollComponent implements AfterViewInit {
  items = Array.from({length: 100}).map((_, i) => `#${i}`);

  @ViewChild(CdkVirtualScrollViewport)
  viewPort: CdkVirtualScrollViewport;

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    console.log('HorizontalVirtualScrollComponent onMouseWheel: ',)
    // event.stopImmediatePropagation();
    // event.stopPropagation();
    // event.preventDefault();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollToIndex(this.items.length / 2))
  }

  scrollToIndex(index: number): void {
    this.viewPort.scrollToIndex(index, "smooth");
  }
}
