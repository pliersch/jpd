import { CommonModule } from '@angular/common';
import { Component, isDevMode, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageService } from '../../../../common';
import { BaseComponent } from '../../../core/base/base.component';

export interface EndlessGridModel {
  rowCount: number;
  columnCount: number;
}

@Component({
  selector: 'a4w-endless-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './endless-grid.component.html',
  styleUrls: ['./endless-grid.component.scss']
})
export class EndlessGridComponent extends BaseComponent<EndlessGridModel> implements OnInit {

  imgUrls: string[];
  rows: number[];
  columns: number[];

  constructor(private imageService: ImageService) {
    super();
  }

  ngOnInit(): void {
    this.imgUrls = this.imageService.getImageUrls();
    this.columns = this._buildArray(this.model.columnCount);
    const rowCount = Math.floor(this.imgUrls.length / this.columns.length);
    this.rows = this._buildArray(rowCount);
    if (isDevMode()) {
      this.checkAndLogWarning();
    }
  }

  private _buildArray(count: number): number[] {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }

  private checkAndLogWarning(): void {
    const modulo = this.imgUrls.length % this.columns.length;
    if (modulo != 0) {
      console.warn(`EndlessGridComponent can´t show all images.
        The last ${modulo} image(s) will not shown`);
    }
  }

  openImageViewer(index: number): void {
    void this.router.navigateByUrl('gallery/images/' + index)
  }

}
