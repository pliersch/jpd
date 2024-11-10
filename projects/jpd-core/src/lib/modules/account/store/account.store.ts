import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.model';

type AccountState = {
  user: User | null;
};

const initialState: AccountState = {
  user: null,
};

export const AccountStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('account'),
  withState(initialState),
  withMethods((store, authService = inject(AuthService)) => ({
      login: rxMethod<void>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap(() => {
            return authService.loginFake().pipe(
              tapResponse({
                next: (user) => patchState(store, {user: user}),
                error: console.error,
              })
            );
          })
        )
      ),
    }),
  ),
);
