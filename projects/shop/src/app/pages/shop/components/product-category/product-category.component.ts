import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefaultListComponent } from '@shop/pages/shop/components/default-list/default-list.component';
import { getProductCategoryFromUrl } from '@shop/pages/shop/store/models/url-product-types';
import { ShopStore } from '@shop/pages/shop/store/shop.store';

@Component({
  selector: 'shop-product-category',
  standalone: true,
  imports: [
    DefaultListComponent
  ],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCategoryComponent implements OnInit {

  private route = inject(ActivatedRoute);
  readonly store = inject(ShopStore);

  ngOnInit(): void {

    const path: string | undefined = this.route.snapshot.url[0]?.path;
    if (!path) {
      this.store.setCategory(undefined);
      return;
    }
    const category = getProductCategoryFromUrl(path);
    if (category) {
      this.store.setCategory(category);
    }
  }

}
