import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Article, Product } from '@shop/pages/shop/store/shop.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

type ShopState = {
  lastChanges: string | undefined;
  product: Product | undefined;
  category: string | undefined;
};

const initialState: ShopState = {
  lastChanges: undefined,
  product: undefined,
  category: undefined,
};

export const ShopStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('shop'),
  withState(initialState),
  withEntities({entity: type<Article>(), collection: 'articles'}),
  // withEntities({entity: type<ProductCategory>(), collection: 'requestedProducts'}),
  withComputed(({articlesEntities, product, category}) => ({
    getCurrentProducts: computed(() => articlesEntities()
      .filter(article => article.product === product()
        && (article.category === category() || !category()))),
  })),

  // article.category === productCategory()?.category

  withMethods((store, service = inject(ShopService)) => ({
      loadAll: rxMethod<Product>(
        pipe(
          // tap(() => patchState(store, {isLoading: true})),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((product) => {
            return service.getAll(product).pipe(
              tapResponse({
                // next: (articles) => console.log(articles),
                next: (articles) => patchState(store, setAllEntities(articles, {collection: 'articles'})),
                error: console.error,
                // finalize: () => computeWidgets(store.articlesEntities()),
              })
            );
          })
        )
      ),
      // loadProductsByCategoryAndFamily: rxMethod<ProductCategory>(
      //   pipe(
      //     filter(Boolean),
      //     tap((p) => patchState(store, {productCategory: p})),
      //     // tap(() => patchState(store, setPending())),
      //     switchMap((product) => {
      //       return service.getByProductCategory(product.product, product.category).pipe(
      //         tapResponse({
      //           // next: (articles) => console.log(articles),
      //           next: (articles) => {
      //             patchState(store, addEntities(articles, {collection: 'articles'}));
      //             patchState(store, addEntity(product, {collection: 'requestedProducts'}));
      //           },
      //           error: console.error,
      //           // finalize: () => computeWidgets(store.articlesEntities()),
      //         })
      //       );
      //     }),
      //   ),
      // ),
    }),
  ),
  // second withMethods for access to "loadProductsByCategoryAndFamily"
  withMethods((store) => ({
      setProduct: rxMethod<Product>(
        pipe(
          tap((val) => patchState(store, {product: val})),
        ),
      ),
      setCategory: rxMethod<string | undefined>(
        pipe(
          tap((val) => patchState(store, {category: val})),
          // filter(p => !store.requestedProductsEntities().find(product => product.id === p.id)),
          // tap((val) => store.loadProductsByCategoryAndFamily(val)),
        ),
      ),
      // setProductCategory: rxMethod<ProductCategory | undefined>(
      //   pipe(
      //     filter(Boolean),
      //     tap((val) => patchState(store, {productCategory: val})),
      //     filter(p => !store.requestedProductsEntities().find(product => product.id === p.id)),
      //     tap((val) => store.loadProductsByCategoryAndFamily(val)),
      //   ),
      // ),
    }),
  ),
  // withHooks({
  //   onInit(/*{loadAll}*/): void {
  //     loadAll();
  //   }
  // })
);
