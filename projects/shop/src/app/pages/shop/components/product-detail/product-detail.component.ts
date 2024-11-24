import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { NumberInputComponent } from '@shop/pages/shop/components/number-input/number-input.component';
import { DealerStore } from '@shop/pages/shop/store/dealer/dealer.store';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { ImageFallbackDirective, StarsComponent } from 'jpd-core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    ImageFallbackDirective,
    StarsComponent,
    MatTabGroup,
    MatTab,
    FormsModule,
    MatFormFieldModule,
    NumberInputComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  readonly shopStore = inject(ShopStore);
  readonly dealerStore = inject(DealerStore);

  @Input() // read id from url param id (withComponentInputBinding)
  set id(articleId: string) {
    this.shopStore.setActiveArticleById(articleId);
  }

}
