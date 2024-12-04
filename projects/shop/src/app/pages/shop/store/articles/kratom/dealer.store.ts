import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Dealer } from '@shop/pages/shop/store/articles/kratom/dealer.model';
import { DealerService } from '@shop/pages/shop/store/articles/kratom/dealer.service';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

export const DealerStore = signalStore(
  {providedIn: 'root'},
  // withCallState(),
  withDevtools('dealer'),
  withEntities<Dealer>(),
  // withComputed(({entities}) => ({
  //   activeDealer: computed(() =>
  //     entities().find(article => article.dealerType === 'C')),
  // })),
  withMethods((store, service = inject(DealerService)) => ({
      loadAll: rxMethod<void>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap(() => {
            return service.getAll().pipe(
              tapResponse({
                next: (items) => updateState(store, 'dealer load kratom dealer', setAllEntities(items)),
                error: console.error,
                // finalize: () => { }
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
