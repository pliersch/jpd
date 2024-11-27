import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withHooks, withMethods, } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DetailService } from '@shop/pages/shop/detail/detail.service';
import { DealerStore } from '@shop/pages/shop/store/articles/kratom/dealer.store';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { setFulfilled, setPending, withRequestStatus, withRouteParams } from 'jpd-core';
import { filter, pipe, switchMap, tap } from 'rxjs';

export const DetailStore = signalStore(
  // withCallState(),
  withDevtools('article detail'),
  withRequestStatus(),
  withRouteParams({articleId: (param) => String(param)}),
  withComputed(({articleId},
                shopStore = inject(ShopStore),
                dealerStore = inject(DealerStore)) => ({
    article: computed(() =>
      articleId() ? shopStore.entityMap()[articleId()] : null),
    activeDealer: computed(() =>
      dealerStore.entities().find(article => article.dealerType === shopStore.entityMap()[articleId()].dealer))
  })),
  withMethods(
    (
      store,
      shopStore = inject(ShopStore),
      detailService = inject(DetailService),
      router = inject(Router),
    ) => ({
      setActiveArticleById: rxMethod<string>(
        pipe(
          filter((id) => !shopStore.entityMap()[id]),
          tap(() => patchState(store, setPending())),
          switchMap((id) => {
            return detailService.getById(id).pipe(
              tapResponse({
                next: (article) => {
                  patchState(store, setFulfilled());
                  shopStore.setArticle(article);
                },
                error: () => console.error('not found', id),
                // error: () => router.navigateByUrl('/not-found'),
              }),
            );
          }),
        ),
      ),
    }),
  ),
  withHooks({
    onInit({setActiveArticleById, articleId}) {
      setActiveArticleById(articleId);
    },
  }),
);
