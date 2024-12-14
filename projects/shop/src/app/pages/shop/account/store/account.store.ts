import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { Metadata } from './account.model';
import { AccountService } from './account.service';

type CustomerAccountState = {
  metadata: Metadata | undefined;
  discount: number;
};

const initialState: CustomerAccountState = {
  metadata: undefined,
  discount: 0,
};

export const CustomerAccountStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('customer-account'),
  withState(initialState),
  withMethods((store, authService = inject(AccountService)) => ({
      loadMetadata: rxMethod<void>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap(() => {
            return authService.loadMetadataFake().pipe(
              tapResponse({
                next: (val) => updateState(store, 'customer load meta', {metadata: val}),
                error: console.error,
              })
            );
          })
        )
      ),
      setDiscount: rxMethod<number>(
        pipe(
          tap((val) => updateState(store, 'customer set discount', {discount: val})),
        ),
      ),
    }),
  ),
  withHooks(({loadMetadata}) => {
    return {
      onInit(): void {
        loadMetadata();
      },
    };
  }),
);
