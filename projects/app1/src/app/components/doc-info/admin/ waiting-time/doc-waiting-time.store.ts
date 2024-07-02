import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { DailyOpeningHours } from '@app1/components/doc-info/admin/opening-hours/doc-opening.model';
import { DocOpeningService } from '@app1/components/doc-info/admin/opening-hours/doc-opening.service';
import { computeNextOpening } from '@app1/components/doc-info/admin/opening-hours/doc-opening.util';
import { DocWidgetItem } from '@app1/components/doc-info/store/doc-widget.model';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

export const DocOpeningStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('doc-waiting-time'),
  withEntities<DailyOpeningHours>(),
  withMethods((store,
               service = inject(DocOpeningService),
               widgetStore = inject(DocWidgetStore)) => ({
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
                finalize: () => {
                  widgetStore.setMessage('Info', 'foo');
                  widgetStore.setMessage('Öffnung', computeNextOpening(store.entities()))
                }
              })
            );
          })
        )
      ),
      update: rxMethod<DocWidgetItem>(
        pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((widget) => {
            return service.update(widget.id, {visibility: widget.visibility}).pipe(
              tapResponse({
                next: (widget) => patchState(store, setEntity(widget)),
                error: console.error,
              })
            );
          })
        )
      ),
      // updateBySse(widget: DocWidgetItem): void {
      //   patchState(store, setEntity(widget, {collection: 'widgets'}))
      // }
    }),
  ),
  withHooks({
    onInit({loadAll}): void {
      loadAll();
    }
  })
);
