import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { getProductCategoryFromUrl, getProductFromUrl } from '@shop/pages/shop/store/models/url-product-types';
import { Product } from '@shop/pages/shop/store/shop.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { of } from 'rxjs';

export const productCategoryResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot) => {
  // const router = inject(Router);
  const service = inject(ShopService);
  const store = inject(ShopStore);
  // const id = route.paramMap.get('id')!;
  // console.log(' productCategoryResolver: ', route.firstChild?.url)
  // console.log(' productCategoryResolver: ', route.firstChild?.firstChild?.url)

  const productUrlSegments = route.firstChild?.url;
  if (!productUrlSegments) {
    // store.setProduct(undefined);
    return of(true);
  }
  const product = getProductFromUrl(productUrlSegments[0].path);
  if (product) {
    store.setProduct(product);
  }
  service.getAll(product as Product);

  const categoryUrlSegments = route.firstChild?.firstChild?.url;
  if (!categoryUrlSegments) {
    store.setCategory(undefined);
    return of(true);
  }
  const category = getProductCategoryFromUrl(productUrlSegments[0].path);
  if (category) {
    store.setCategory(category);
  }
  return of(true);

  // return service.getCrisis(id).pipe(mergeMap(crisis => {
  //   if (crisis) {
  //     return of(crisis);
  //   } else {  // id not found
  //     router.navigate(['/crisis-center']);
  //     return EMPTY;
  //   }
  // }));
};
