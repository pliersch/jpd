import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { Recipe } from '@app1/pages/baking/store/recipe.model';
import { RecipesService } from '@app1/pages/baking/store/recipes.service';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

type RecipesState = {
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: RecipesState = {
  isLoading: false,
  filter: {query: '', order: 'asc'},
};

export const RecipesStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('recipes'),
  withState(initialState),
  // withEntities<Recipe>(),
  withEntities({entity: type<Recipe>(), collection: 'recipes'}),
  // 👇 Accessing previously defined state and computed signals.
  withComputed(({recipesEntities, filter}) => ({
    booksCount: computed(() => recipesEntities().length),
    sortedBooks: computed(() => {
      // const direction = filter.order() === 'asc' ? 1 : -1;
      return recipesEntities().sort(sortById);
    }),
  })),

  withMethods((store, recipesService = inject(RecipesService)) => ({
    async getAll(): Promise<void> {
      patchState(store, {isLoading: true});
      const recipes = recipesService.getAll();
      patchState(store, setAllEntities(recipes, {collection: 'recipes'}));
      patchState(store, {isLoading: false});
    },
    loadAll: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, {isLoading: true})),
        switchMap((query) => {
          return recipesService.loadAll().pipe(
            tapResponse({
              next: (recipes) => patchState(store, setAllEntities(recipes, {collection: 'recipes'})),
              error: console.error,
              finalize: () => patchState(store, {isLoading: false}),
            })
          );
        })
      )
    ),
    updateQuery(query: string): void {
      // 👇 Updating state using the `patchState` function.
      patchState(store, (state) => ({filter: {...state.filter, query}}));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({filter: {...state.filter, order}}));
    },
  })),
  withHooks({
    onInit({getAll}): void {
      getAll()
    }
  })
);

export function sortById(p1: Recipe, p2: Recipe): number {
  const compare = p1.id - p2.id;
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else {
    return 0;
  }
}
