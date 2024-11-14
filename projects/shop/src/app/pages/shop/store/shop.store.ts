import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withHooks, withMethods, withState } from '@ngrx/signals';
import { addEntities, addEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Article, Product } from '@shop/pages/shop/store/shop.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { debounceTime, distinctUntilChanged, filter, pipe, switchMap } from 'rxjs';

type ShopState = {
  lastChanges: string | undefined;
};

const initialState: ShopState = {
  lastChanges: undefined,
};

export const ShopStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('shop'),
  withState(initialState),
  withEntities({entity: type<Article>(), collection: 'articles'}),
  withEntities({entity: type<Product>(), collection: 'requestedProducts'}),
  // withComputed(({articlesEntities}) => ({
  //   // getAvailableWidgets: computed(() => articlesEntities().filter(article => article.visibility === 'none')),
  //   // getHighWidgets: computed(() => articlesEntities().filter(article => article.visibility === 'high')),
  // })),
  withMethods((store, service = inject(ShopService)) => ({
      loadAll: rxMethod<void>(
        pipe(
          // tap(() => patchState(store, {isLoading: true})),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap(() => {
            return service.getAll().pipe(
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
      loadProductsByCategoryAndFamily: rxMethod<Product>(
        pipe(
          filter(Boolean),
          filter(p => !store.requestedProductsEntities().find(product => product.id === p.id)),
          // tap(() => patchState(store, setPending())),
          switchMap((product) => {
            return service.getByCategoryAndFamily(product.family, product.category).pipe(
              tapResponse({
                // next: (articles) => console.log(articles),
                next: (articles) => {
                  patchState(store, addEntities(articles, {collection: 'articles'}));
                  patchState(store, addEntity(product, {collection: 'requestedProducts'}));
                },
                error: console.error,
                // finalize: () => computeWidgets(store.articlesEntities()),
              })
            );
          }),
        ),
      ),
    }),
  ),
  withHooks({
    onInit(/*{loadAll}*/): void {
      // loadAll();
    }
  })
);
