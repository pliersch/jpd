import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { Vacation } from '@app1/components/doc-info/admin/vacation/doc-vacation.model';
import { DocVacationService } from '@app1/components/doc-info/admin/vacation/doc-vacation.service';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { formatDuration, intervalToDuration } from 'date-fns';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

export const DocVacationStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('doc-vacation'),
  withEntities<Vacation>(),
  withMethods((store,
               service = inject(DocVacationService),
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
                finalize: () => widgetStore.setMessage('Urlaub', computeNextVacation(store.entities()))
              })
            );
          })
        )
      ),
      // update: rxMethod<DocWidgetItem>(
      //   pipe(
      //     debounceTime(300),
      //     distinctUntilChanged(),
      //     switchMap((widget) => {
      //       return service.update(widget.id, {visibility: widget.visibility}).pipe(
      //         tapResponse({
      //           next: (widget) => patchState(store, setEntity(widget)),
      //           error: console.error,
      //         })
      //       );
      //     })
      //   )
      // ),

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

export function computeNextVacation(items: Array<Vacation>): string {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const next: Date = items[0].begin;
  const duration = intervalToDuration({
    start: now,
    end: next
  });
  const msg = formatDuration(duration, {format: ['months', 'weeks', 'days']});
  return msg + ` vom ${next} bis ${items[0].end}`;
}
