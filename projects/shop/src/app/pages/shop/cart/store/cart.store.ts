import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { removeEntity, setEntity, updateEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { withShipment } from '@shop/pages/shop/cart/shipment/shipment.feature';
import {
  CartItem,
  CartSummary,
  createOrderPosition,
  CreateOrderPosition,
  OrderPosition,
  totalCost,
  UpdateOrderPosition,
} from '@shop/pages/shop/cart/store/cart.model';
import { SHOP_CONSTANTS } from '@shop/pages/shop/const';
import { getPriceBySize } from '@shop/pages/shop/store/articles/article.model';
import { ShopStore } from '@shop/pages/shop/store/shop.store';
import { withRequestStatus } from 'jpd-core';
import { pipe, tap } from 'rxjs';

type CartState = {
  discount: number;
  _counter: number;
};

const initialState: CartState = {
  discount: 0,
  _counter: 0,
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  // withCallState(),
  withDevtools('cart'),
  withState(initialState),
  withShipment(),
  withEntities<OrderPosition>(),
  withRequestStatus(),
  withComputed(({ entities }) => ({
    // helper: animation trigger
    itemCount: computed(() => entities().length),
  })),
  withComputed(({ entities }, shopStore = inject(ShopStore)) => ({
    items: computed((): CartItem[] =>
      entities().map((entity) => {
        const article = shopStore.priced()[entity.entityId];
        return {
          id: entity.id,
          title: `${article.name} ${article.charge} ${article.shortName}`,
          description: 'string',
          imageUrl: article.pictureUrl,
          size: entity.size,
          price: getPriceBySize(article, entity.size),
          quantity: entity.quantity,
          // todo hard coded
          routerLink: ['/shop/kratom/detail/', article.id],
        };
      }),
    ),
  })),
  withComputed(({ items }) => ({
    subtotal: computed(() => totalCost(items())),
  })),
  withComputed(({ subtotal }) => ({
    freeShipping: computed(() => subtotal() > SHOP_CONSTANTS.FREE_SHIPPING),
    freeShippingDiff: computed(() => SHOP_CONSTANTS.FREE_SHIPPING - subtotal()),
  })),
  withComputed(({ subtotal, shipmentCost, freeShipping }) => ({
    summary: computed((): CartSummary => {
      const shipment = freeShipping() ? 0 : shipmentCost();
      return {
        subtotal: subtotal(),
        shipment: shipment,
        tax: subtotal() * 0.07,
        total: subtotal() + shipment,
      };
    }),
  })),
  withMethods((store) => ({
    add: rxMethod<CreateOrderPosition>(
      pipe(
        tap((dto) => updateState(store, 'cart add position', setEntity(createOrderPosition(dto, store._counter())))),
        tap(() => patchState(store, { _counter: store._counter() + 1 })),
      ),
    ),
    update: rxMethod<UpdateOrderPosition>(
      pipe(
        tap((dto) =>
          updateState(store, 'cart update position', updateEntity({ id: dto.id, changes: { quantity: dto.quantity } })),
        ),
      ),
    ),
    remove: rxMethod<number>(pipe(tap((id) => updateState(store, 'cart remove position', removeEntity(id))))),
  })),
  withHooks((store) => {
    const shopStore = inject(ShopStore);
    let empty = true;
    return {
      onInit(): void {
        // todo only for dev
        watchState(shopStore, (state) => {
          if (empty && state.requestStatus === 'fulfilled') {
            empty = false;
            store.add({ entityId: 1, quantity: 2, size: '100 Gramm' });
            store.add({ entityId: 4, quantity: 1, size: '250 Gramm' });
          }
        });
      },
    };
  }),
);
