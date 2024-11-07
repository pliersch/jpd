import { Injectable } from '@angular/core';
import { ImageService } from 'jpd-core';

@Injectable({
  providedIn: 'root'
})
export class CustomImageService extends ImageService {

  constructor() {
    super();
  }

  getImageUrls(): string[] {
    const base = 'assets/img/1x/';
    const urls: string[] = [];
    for (let i = 1; i <= 24; i++) {
      urls.push(`${base}${i}.jpg`);
    }
    return urls;
  }
}
