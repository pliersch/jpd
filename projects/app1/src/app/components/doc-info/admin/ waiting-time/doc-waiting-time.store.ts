import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { WaitingTime } from '@app1/components/doc-info/admin/ waiting-time/doc-waiting-time.model';
import { DocWaitingTimeService } from '@app1/components/doc-info/admin/ waiting-time/doc-waiting-time.service';
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
  withEntities<WaitingTime>(),
  withMethods((store,
               service = inject(DocWaitingTimeService),
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
                  widgetStore.setMessage('Wartezeit', 'todo compute msg')
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
            return service.update(widget.id, {active: true, msg: 'todo'}).pipe(
              tapResponse({
                next: (waitingTime) => patchState(store, setEntity(waitingTime)),
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
