import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CustomerAccountStore } from '@shop/pages/shop/account/store/account.store';
import { Article, Category } from '@shop/pages/shop/store/articles/article.model';
import { withTagFilter } from '@shop/pages/shop/store/features/tag-filter.feature';
import { ShopService } from '@shop/pages/shop/store/shop.service';
import { withSelectedEntity } from '@shop/shared/state/selected-entity.feature';
import { withSort } from '@shop/shared/state/sort.feature';
import { setFulfilled, setPending, withRequestStatus } from 'jpd-core';
import { debounceTime, distinctUntilChanged, mergeMap, pipe, switchMap, tap, toArray } from 'rxjs';
import { map } from 'rxjs/operators';

type ShopState = {
  product: Category | undefined;
  category: string | undefined;
  discount: number;
};

const initialState: ShopState = {
  product: undefined,
  category: undefined,
  discount: 0,
};

export const ShopStore = signalStore(
  { providedIn: 'root' },
  // withCallState(),
  withProps(() => ({
    shopService: inject(ShopService),
  })),
  withDevtools('shop'),
  withState(initialState),
  withEntities<Article>(),
  // withTags(),
  withTagFilter(),
  withSort<Article>('name'),
  withSelectedEntity(),
  withRequestStatus(),
  withComputed(({ entities, discount }) => ({
    priced: computed((): Article[] =>
      entities().map((entity) => ({
        ...entity,
        data: entity.data.map((d) => ({
          ...d,
          price: (d.price * (100 - discount())) / 100,
        })),
      })),
    ),
  })),
  withComputed(({ product, category, filteredItems }) => ({
    getFilteredProducts: computed(() =>
      filteredItems().filter(
        (article) => article.product === product() && (article.group === category() || !category()),
      ),
    ),
  })),
  withComputed(({ product, category, sorted }) => ({
    getSortedProducts: computed(() =>
      sorted().filter((article) => article.product === product() && (article.group === category() || !category())),
    ),
  })),
  withMethods(({ shopService, ...store }) => ({
    loadAll: rxMethod<Category>(
      pipe(
        tap(() => patchState(store, setPending())),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((category) => {
          return shopService.getAll(category).pipe(
            mergeMap((asIs: Article[]) => asIs),
            map((res) => ({
              ...res,
              price: res.price > 0 ? res.price + 9 : 0,
            })),
            toArray(),
            tapResponse({
              next: (articles) => updateState(store, 'shop load articles', setAllEntities(articles), setFulfilled()),
              error: (error: { message: string }) => {
                console.log(' error: ', error.message);
              },
            }),
          );
        }),
      ),
    ),
    setDiscount: rxMethod<number>(pipe(tap((val) => updateState(store, 'shop set discount', { discount: val })))),
    setProduct: rxMethod<Category | undefined>(
      pipe(tap((val) => updateState(store, 'shop set product', { product: val }))),
    ),
    setCategory: rxMethod<string | undefined>(
      pipe(tap((val) => updateState(store, 'shop set category', { category: val }))),
    ),
    addArticle(article: Article): void {
      updateState(store, 'shop set article', setEntity(article));
      // updateState(store, 'shop set selectedEntity', setSelectedEntity(article.id));
    },
  })),
  withHooks(({ loadAll, setDiscount }) => {
    const accountStore = inject(CustomerAccountStore);
    return {
      onInit(): void {
        // todo only for dev
        loadAll('kratom');
        watchState(accountStore, (state) => {
          setDiscount(state.discount);
        });
      },
    };
  }),
);
