import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setEntity, withEntities } from '@ngrx/signals/entities';
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
    preview: computed(() => 303/*totalCost(entities())*/),
  })),
  withMethods((store) => ({
      addToCart: rxMethod<CreateOrderPositionDto>(
        pipe(
          tap((dto) => updateState(store, 'cart add position', setEntity({
            id: store._count(),
            article: dto.article,
            size: dto.size,
            quantity: dto.quantity
          }))),
          tap(() => patchState(store, {_count: store._count() + 1})),
        ),
      ),
    }),
  ),
  withHooks(({addToCart}) => {
    const shopStore = inject(ShopStore);

    return {
      onInit(): void {

        watchState(shopStore, (state) => {
          if (state.ids.length === 1) {
            addToCart({article: shopStore.entities()[0], quantity: 3, size: 100});
          }
        });
      },
    };
  }),
);
