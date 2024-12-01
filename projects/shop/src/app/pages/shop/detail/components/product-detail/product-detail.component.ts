import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { TagChipsComponent } from '@shop/pages/shop/detail/components/tags/tag-chips.component';
import { WeightTableComponent } from '@shop/pages/shop/detail/components/weight-table/weight-table.component';
import { DetailStore } from '@shop/pages/shop/detail/detail.store';
import { NumberInputComponent } from '@shop/pages/shop/detail/number-input/number-input.component';
import { ImageFallbackDirective, StarsComponent } from 'jpd-core';

@Component({
  selector: 'shop-product-detail',
  standalone: true,
  imports: [
    ImageFallbackDirective,
    StarsComponent,
    MatTabGroup,
    MatTab,
    FormsModule,
    MatFormFieldModule,
    NumberInputComponent,
    WeightTableComponent,
    NgOptimizedImage,
    TagChipsComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [DetailStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

  readonly detailStore = inject(DetailStore);
}
