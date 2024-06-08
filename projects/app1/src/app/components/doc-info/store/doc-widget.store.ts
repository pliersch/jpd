import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { DocInfoItem } from '@app1/components/doc-info/store/doc-widget.model';
import { DocWidgetService } from '@app1/components/doc-info/store/doc-widget.service';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

export const DocWidgetStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('doc-widget'),
  withEntities({entity: type<DocInfoItem>(), collection: 'widgets'}),
  withComputed(({widgetsEntities}) => ({
    getAvailableWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'none')),
    getHighWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'high')),
    getLowWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'low')),
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
