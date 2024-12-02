import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, withComputed, withMethods } from '@ngrx/signals';
import { setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { totalCost } from '@shop/pages/shop/cart/store/cart.model';
import { Article } from '@shop/pages/shop/store/articles/article.model';
import { withRequestStatus } from 'jpd-core';
import { pipe, tap } from 'rxjs';

export const CartStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('cart'),
  withEntities<Article>(),
  withRequestStatus(),
  withComputed(({entities}) => ({
    totalCost: computed(() => totalCost(entities())),
  })),

  withMethods((store,
               // shopService = inject(ShopService),
               /*articleService = inject(ArticleService)*/) => ({
      // loadAll: rxMethod<Category>(
      //   pipe(
      //     tap(() => patchState(store, setPending())),
      //     debounceTime(300),
      //     distinctUntilChanged(),
      //     switchMap((product) => {
      //       return shopService.getAll(product).pipe(
      //         tapResponse({
      //           // next: (articles) => console.log(articles),
      //           next: (articles) => updateState(store, 'shop load articles', setAllEntities(articles), setFulfilled()),
      //           error: (error: { message: string }) => {
      //             console.log(' error: ', error.message)
      //             // updateState(store, 'shop error load all', setError(error.message));
      //           },
      //           // finalize: () => computeWidgets(store.articlesEntities()),
      //         })
      //       );
      //     })
      //   )
      // ),
      addToCart: rxMethod<Article>(
        pipe(
          tap((article) => updateState(store, 'cart add article', setEntity(article))),
        ),
      ),
    }),
  ),
);
