import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { Vacation } from '@app1/components/doc-info/admin/vacation/doc-vacation.model';
import { DocVacationService } from '@app1/components/doc-info/admin/vacation/doc-vacation.service';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { intervalToDuration } from 'date-fns';
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
  let next: Date = new Date();
  for (const item of items) {
    if (now < item.begin) {
      next = item.begin;
      break;
    }
  }
  // const result = format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  // console.log(result)

  const duration = intervalToDuration({
    start: now,
    end: next
  });
  console.log('computeNextVacation computeNextVacation: ', duration)
  return duration.toLocaleString();
}
