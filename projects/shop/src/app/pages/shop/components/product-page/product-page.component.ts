import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { fadeInAnimation } from '@shop/common/animations';
import { NavbarComponent } from '@shop/components/navbar/navbar.component';
import { getProductFromUrl } from '@shop/pages/shop/store/models/url-product-types';
import { ShopStore } from '@shop/pages/shop/store/shop.store';

@Component({
  selector: 'shop-product-page',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation]
})
export class ProductPageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private contexts = inject(ChildrenOutletContexts);
  readonly store = inject(ShopStore);

  ngOnInit(): void {
    const path: string | undefined = this.route.snapshot.url[0]?.path;
    if (!path) {
      this.store.setProduct(undefined);
      return;
    }
    const product = getProductFromUrl(path);
    if (product) {
      this.store.setProduct(product);
      this.store.loadAll(product);
    }
  }

  getRouteAnimationData(): unknown {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
