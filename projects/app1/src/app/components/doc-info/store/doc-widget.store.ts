import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { DocInfoItem } from '@app1/components/doc-info/store/doc-widget.model';
import { DocWidgetService } from '@app1/components/doc-info/store/doc-widget.service';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { parseISO } from 'date-fns';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

type DocWidgetState = {
  lastChanges: string | undefined;
};

const initialState: DocWidgetState = {
  lastChanges: undefined,
};
export const DocWidgetStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('doc-widget'),
  withState(initialState),
  withEntities({entity: type<DocInfoItem>(), collection: 'widgets'}),
  withComputed(({widgetsEntities}) => ({
    getAvailableWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'none')),
    getHighWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'high')),
    getLowWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'low')),
    getLastChange: computed(() => {
      return widgetsEntities().length > 0 ? parseISO(widgetsEntities().sort(sortByDate)[0]?.created) : undefined;
    }),
  })),
  withMethods((store, service = inject(DocWidgetService)) => ({
      loadAll: rxMethod<void>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          // tap(() => patchState(store, {isLoading: true})),
          switchMap(() => {
            return service.getAll().pipe(
              tapResponse({
                next: (widgets) => patchState(store, setAllEntities(widgets, {collection: 'widgets'})),
                error: console.error,
                // finalize: () => patchState(store, {isLoading: false}),
              })
            );
          })
        )
      ),
      update: rxMethod<DocInfoItem>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((widget) => {
            return service.update(widget.id, {visibility: widget.visibility}).pipe(
              tapResponse({
                next: (widget) => patchState(store, setEntity(widget, {collection: 'widgets'})),
                error: console.error,
              })
            );
          })
        )
      ),
      updateBySse(widget: DocInfoItem): void {
        patchState(store, setEntity(widget, {collection: 'widgets'}))
      }
    }),
  ),
  withHooks({
    onInit({loadAll}): void {
      loadAll();
    }
  })
);

export function sortByDate(w1: DocInfoItem, w2: DocInfoItem): number {
  const compare = Number(w1.created.at(0)) - Number(w2.created.at(0));
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else {
    return 0;
  }
}
