import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { removeEntity, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { totalCost } from '@shop/pages/shop/cart/store/cart.model';
import { CreateOrderPositionDto, OrderPosition } from '@shop/pages/shop/shared/models/orderPosition';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { withRequestStatus } from 'jpd-core';
import { pipe, tap } from 'rxjs';

export const CartStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('cart'),
  withState({
    _count: 0,
  }),
  withEntities<OrderPosition>(),
  withRequestStatus(),
  withComputed(({entities}) => ({
    totalCost: computed(() => totalCost(entities())),
  })),
  withComputed(({totalCost}) => ({
    freeShipping: computed(() => totalCost() > 50),
    freeShippingDiff: computed(() => 50 - totalCost()),
  })),
  withMethods((store) => ({
      add: rxMethod<CreateOrderPositionDto>(
        pipe(
          tap((dto) => updateState(store, 'cart add position',
            setEntity({
              id: store._count(),
              article: dto.article,
              size: dto.size,
              quantity: dto.quantity
            }))),
          tap(() => patchState(store, {_count: store._count() + 1})),
        ),
      ),
      remove: rxMethod<number>(
        pipe(
          tap((id) => updateState(store, 'cart add position', removeEntity(id))),
          // tap(() => patchState(store, {_count: store._count() + 1})),
        ),
      ),
    }),
  ),
  withHooks(({add}) => {
    const shopStore = inject(ShopStore);
    let empty = true;
    return {
      onInit(): void {
        // todo only for dev
        watchState(shopStore, (state) => {
          if (empty && state.ids.length > 0) {
            empty = false;
            add({article: shopStore.entities()[0], quantity: 3, size: 100});
            add({article: shopStore.entities()[0], quantity: 3, size: 100});
            add({article: shopStore.entities()[0], quantity: 3, size: 100});
            add({article: shopStore.entities()[0], quantity: 3, size: 100});
          }
        });
      },
    };
  }),
);
