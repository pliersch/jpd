import { updateState } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Country } from '@shop/pages/shop/cart/shipment/countries';
import { pipe, tap } from 'rxjs';

type ShipmentState = {
  country: Country;
};

const initialState: ShipmentState = {
  country: {code: 'DE', name: 'Deutschland'},
};

export function withShipment() {
  return signalStoreFeature(
    withState(initialState),
    withComputed(({country}) => ({
      shipmentCost: computed(() => country.code() === 'DE' ? 5 : 7.5),
    })),
    withMethods((store) => ({
        setCountry: rxMethod<Country>(
          pipe(
            tap((val) => updateState(store, 'shipment set country', {country: val})),
          ),
        ),
      }),
    ),
  );
}
