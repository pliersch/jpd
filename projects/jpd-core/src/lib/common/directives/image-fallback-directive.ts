import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[a4wImgFallback]',
  standalone: true
})
export class ImageFallbackDirective {

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError(): void {
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = '/assets/svg/broken_image.svg';
    element.style.display = 'block';
    element.style.marginLeft = 'auto';
    element.style.marginRight = 'auto';
    element.style.width = '100%';
    element.style.maxWidth = '250px';
  }

}
