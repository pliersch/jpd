import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Dealer, DealerType } from '@shop/pages/shop/store/dealer/dealer.model';
import { DealerService } from '@shop/pages/shop/store/dealer/dealer.service';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

export const DealerStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('dealer'),
  withEntities<Dealer>(),
  withMethods((store, service = inject(DealerService)) => ({
      loadAll: rxMethod<void>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          // tap(() => patchState(store, {isLoading: true})),
          switchMap(() => {
            return service.getAll().pipe(
              tapResponse({
                next: (items) => patchState(store, setAllEntities(items)),
                error: console.error,
                // finalize: () => { }
              })
            );
          })
        )
      ),
      getDealer(type: DealerType): Dealer {
        return store.entities().find(dealer => dealer.dealerType === type)!;
      }
    }),
  ),
  withHooks({
    onInit({loadAll}): void {
      loadAll();
    }
  })
);
