import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ImageService {

  abstract getImageUrls(): string[] ;
}
