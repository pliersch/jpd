import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { removeEntity, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CreateOrderPositionDto, OrderPosition, totalCost } from '@shop/pages/shop/cart/store/cart.model';
import { SHOP_CONSTANTS } from '@shop/pages/shop/const';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { withRequestStatus } from 'jpd-core';
import { pipe, tap } from 'rxjs';

export const CartStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('cart'),
  withState({
    _counter: 0,
    itemCount: 0,
  }),
  withEntities<OrderPosition>(),
  withRequestStatus(),
  withComputed(({entities}) => ({
    items: computed(() => totalCost(entities())),
    totalCost: computed(() => totalCost(entities())),
  })),
  withComputed(({totalCost}) => ({
    freeShipping: computed(() => totalCost() > SHOP_CONSTANTS.FREE_SHIPPING),
    freeShippingDiff: computed(() => SHOP_CONSTANTS.FREE_SHIPPING - totalCost()),
  })),
  withMethods((store) => ({
      add: rxMethod<CreateOrderPositionDto>(
        pipe(
          tap((dto) => updateState(store, 'cart add position',
            setEntity({
              id: store._counter(),
              article: dto.article,
              size: dto.size,
              quantity: dto.quantity
            }))),
          tap(() => patchState(store, {_counter: store._counter() + 1})),
          tap(() => patchState(store, {itemCount: store.entities().length})),
        ),
      ),
      remove: rxMethod<number>(
        pipe(
          tap((id) => updateState(store, 'cart remove position', removeEntity(id))),
        ),
      ),
    }),
  ),
  withHooks((store) => {
    const shopStore = inject(ShopStore);
    let empty = true;
    return {
      onInit(): void {
        // todo only for dev
        watchState(shopStore, (state) => {
          if (empty && state.requestStatus === 'fulfilled') {
            empty = false;
            store.add({article: shopStore.entities()[0], quantity: 3, size: 100});
            store.add({article: shopStore.entities()[4], quantity: 3, size: 100});
            store.add({article: shopStore.entities()[8], quantity: 3, size: 100});
          }
        });
      },
    };
  }),
);