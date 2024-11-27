import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Article, Category } from '@shop/pages/shop/store/articles/article.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { setFulfilled, setPending, withRequestStatus } from 'jpd-core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

type ShopState = {
  lastChanges: string | undefined;
  product: Category | undefined;
  category: string | undefined;
  article: Article | undefined;
};

const initialState: ShopState = {
  lastChanges: undefined,
  product: undefined,
  category: undefined,
  article: undefined,
};

export const ShopStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('shop'),
  withState(initialState),
  withEntities<Article>(),
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
      setArticle(article: Article): void {
        updateState(store, 'shop set article', setEntity(article));
      },
      // setActiveArticleById: rxMethod<string>(
      //   pipe(
      //     debounceTime(300),
      //     distinctUntilChanged(),
      //     switchMap((id) => {
      //       return articleService.getById(id).pipe(
      //         tapResponse({
      //           next: (article) => {
      //             patchState(store, {article: article})
      //           },
      //           error: console.error,
      //           // finalize: () => computeWidgets(store.articlesEntities()),
      //         })
      //       );
      //     })
      //   ),
      // ),

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
      setProduct: rxMethod<Category | undefined>(
        pipe(
          tap((val) => updateState(store, 'shop set product', {product: val})),
        ),
      ),
      setCategory: rxMethod<string | undefined>(
        pipe(
          tap((val) => updateState(store, 'shop set category', {category: val})),
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
