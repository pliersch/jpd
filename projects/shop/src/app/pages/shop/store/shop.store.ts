import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Article } from '@shop/pages/shop/store/shop.model';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

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
  withComputed(({articlesEntities}) => ({
    // getAvailableWidgets: computed(() => articlesEntities().filter(article => article.visibility === 'none')),
    // getHighWidgets: computed(() => articlesEntities().filter(article => article.visibility === 'high')),
    getArticles: computed(() => articlesEntities()),
  })),
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
      update: rxMethod<Article>(
        pipe(
          switchMap((widget) => {
            return service.update(widget.id, widget).pipe(
              tapResponse({
                next: (article) =>
                  patchState(store, updateEntity({
                    id: article!.id,
                    changes: {rating: article.rating}
                  }, {collection: 'articles'})),
                error: console.error,
              })
            );
          })
        )
      ),
    }),
  ),
  withHooks({
    onInit({loadAll}): void {
      loadAll();
    }
  })
);
