import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Article, Category } from '@shop/pages/shop/store/articles/article.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { setFulfilled, setPending, withRequestStatus } from 'jpd-core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

type ShopState = {
  product: Category | undefined;
  category: string | undefined;
};

const initialState: ShopState = {
  product: undefined,
  category: undefined,
};

export const ShopStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('shop'),
  withState(initialState),
  withEntities<Article>(),
  // withSelectedEntity(),
  withRequestStatus(),
  withComputed(({entities, product, category}) => ({
    getCurrentProducts: computed(() => entities()
      .filter(article => article.product === product()
        && (article.group === category() || !category()))),
  })),

  withMethods((store,
               shopService = inject(ShopService),
               /*articleService = inject(ArticleService)*/) => ({
      loadAll: rxMethod<Category>(
        pipe(
          tap(() => patchState(store, setPending())),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((product) => {
            return shopService.getAll(product).pipe(
              tapResponse({
                // next: (articles) => console.log(articles),
                next: (articles) => updateState(store, 'shop load articles', setAllEntities(articles), setFulfilled()),
                error: (error: { message: string }) => {
                  console.log(' error: ', error.message)
                  // updateState(store, 'shop error load all', setError(error.message));
                },
                // finalize: () => computeWidgets(store.articlesEntities()),
              })
            );
          })
        )
      ),
      setProduct: rxMethod<Category | undefined>(
        pipe(
          tap((val) => updateState(store, 'shop set product', {product: val})),
        ),
      ),
      setCategory: rxMethod<string | undefined>(
        pipe(
          tap((val) => updateState(store, 'shop set category', {category: val})),
        ),
      ),
      addArticle(article: Article): void {
        updateState(store, 'shop set article', setEntity(article));
        // updateState(store, 'shop set selectedEntity', setSelectedEntity(article.id));
      },
    }),
  ),
  // todo only for dev
  withHooks({
    onInit({loadAll}): void {
      loadAll('kratom');
    }
  })
);
