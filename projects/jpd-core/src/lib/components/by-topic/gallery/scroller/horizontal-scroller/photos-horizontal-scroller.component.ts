import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ScrollerItemComponent } from '../scroller-item/scroller-item.component';


@Component({
    selector: 'a4w-photos-horizontal-scroller',
    templateUrl: './photos-horizontal-scroller.component.html',
    styleUrls: ['./photos-horizontal-scroller.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ScrollerItemComponent, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport, CdkVirtualForOf]
})
export class PhotosHorizontalScrollerComponent implements AfterViewInit, OnChanges {

  @ViewChild(CdkVirtualScrollViewport)
  viewPort: CdkVirtualScrollViewport;

  @ViewChild(CdkVirtualScrollViewport, {read: ElementRef})
  viewPortRef: ElementRef;

  @Input()
  imageUrls: string[];

  @Input()
  currentIndex: number;

  @Output()
  selectEvent = new EventEmitter<number>();

  // private resizeObserver: ResizeObserver;
  lastIndex = 0;

  private readonly ITEM_WIDTH = 150;
  private readonly STEPS = 3;

  private visibleItems = 0;

  // constructor(private deviceRotationService: DeviceRotationService) {
  //   deviceRotationService.on('change', (state) => this.handleRotationChange(state))
  //   // console.log('PhotosHorizontalScrollerComponent constructor: ', deviceRotationService.)
  // }

  ngAfterViewInit(): void {
    setTimeout(() => this.scrollToActiveItem())
    // this.observeResizing();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentIndex'] && !changes['currentIndex'].firstChange) {
      this.scrollToActiveItem();
    }
    this.lastIndex = this.currentIndex;
  }

  scrollToIndex(index: number): void {
    if (this._isItemVisible(index)) {
      return;
    } else {
      this.viewPort.scrollToIndex(index, "smooth");
    }
  }

  onItemSelect($event: number): void {
    this.selectEvent.emit($event);
  }

  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      if (this.currentIndex < this.imageUrls.length - 1) {
        this.scrollToIndex(++this.currentIndex)
      }
    } else {
      if (this.currentIndex > 0) {
        this.scrollToIndex(--this.currentIndex)
      }
    }
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
  }

  _isItemVisible(index: number): boolean {
    const position = (index + 1) * this.ITEM_WIDTH;
    const viewportSize = this.viewPort.getViewportSize();
    const offsetLeft = this.viewPort.measureScrollOffset('left');
    const normalizedPosition = position - offsetLeft;
    const left = normalizedPosition > 0;
    const right = normalizedPosition < viewportSize;

    return left && right;
  }

  scrollToActiveItem(): void {
    this.scrollToIndex(this.currentIndex);
  }

  // fixme need implementation (device rotation)
  // private observeResizing(): void {
  // this.resizeObserver = new ResizeObserver(() => {
  //   // const lastVisibleItems = this.visibleItems;
  //   this.visibleItems = Math.floor(this.viewPort.getViewportSize() / this.ITEM_WIDTH);
  //   console.log('PhotosHorizontalScrollerComponent  vis: ', this.visibleItems)
  //   if (this.currentIndex + 1 > this.visibleItems) {
  //     this.currentIndex++;
  //     this.scrollToActiveItem();
  //   }
  // });
  // this.resizeObserver.observe(this.viewPortRef.nativeElement);
  // }

  // private handleRotationChange(state: RotationState): void {
  //   console.log('PhotosHorizontalScrollerComponent handleRotationChange: ', state)
  // }
}
