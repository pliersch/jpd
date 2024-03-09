import { Location, NgIf } from '@angular/common';
import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { AlertService } from '@lib/common/services/alert.service';
import { ImageService } from '@lib/common/services/image.service';
import {
  PhotosHorizontalScrollerComponent
} from '@lib/components/by-topic/gallery/scroller/horizontal-scroller/photos-horizontal-scroller.component';

@Component({
  selector: 'a4w-photos-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  standalone: true,
  imports: [NgIf, PhotosHorizontalScrollerComponent]
})
export class SlideshowComponent implements OnInit, OnDestroy {

  @Output()
  closeEvent: EventEmitter<void> = new EventEmitter();

  currentIndex = 0;

  imgUrls: string[];

  constructor(private imageService: ImageService,
              private alertService: AlertService,
              private location: Location,) { }

  ngOnInit(): void {
    this.currentIndex = Number(this.location.path().split('/').pop());
    // todo info: scrolling over full/detail view will show next/prev picture
    this.alertService.tip('Benutze die Pfeiltasten ← → für Navigation');
    this.imgUrls = this.imageService.getImageUrls();
  }

  ngOnDestroy(): void {
    this.closeSnackBar();
  }

  nextSlide(): void {
    if (this.currentIndex < this.imgUrls.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onSelectItem($event: number): void {
    this.currentIndex = $event;
  }

  closeSnackBar(): void {
    this.alertService.closeSnackBar();
  }

  // todo makes trouble with current solution
  // @HostListener('document:click', ['$event'])
  // onMouseClick(): void {
  //   this.closeSnackBar();
  // }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code == 'ArrowLeft') {
      this.prevSlide();
      this.closeSnackBar();
    } else if (event.code == 'ArrowRight') {
      this.nextSlide();
      this.closeSnackBar();
    }
  }

  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
  }
}
