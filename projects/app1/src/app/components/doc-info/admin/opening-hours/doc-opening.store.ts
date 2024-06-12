import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { DailyOpeningHours } from '@app1/components/doc-info/admin/opening-hours/doc-opening.model';
import { DocOpeningService } from '@app1/components/doc-info/admin/opening-hours/doc-opening.service';
import { DocWidgetItem } from '@app1/components/doc-info/store/doc-widget.model';
import { DocWidgetStore } from '@app1/components/doc-info/store/doc-widget.store';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setAllEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { getDay, isWithinInterval } from 'date-fns';
import { debounceTime, distinctUntilChanged, pipe, switchMap } from 'rxjs';

export const DocOpeningStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('doc-opening'),
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
                finalize: () => widgetStore.setMessage('Öffnung', computeNextOpening(store.entities()))
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

export function computeNextOpening(items: Array<DailyOpeningHours>): string {
  const now = new Date();
  const openingDay = items[getDay(now)];

  if (isWithin(openingDay.morningBegin, openingDay.morningEnd)) {
    console.log('morning')

    return `geöffnet. schließt ${openingDay.morningEnd}`
  } else if (isWithin(openingDay.afterNoonBegin, openingDay.afterNoonEnd)) {
    console.log('afterNoon')
    return `geöffnet. schließt ${openingDay.afterNoonEnd}`
  } else {
    console.log('next day')
    console.log('TODO freitag montag!!')
    console.log('TODO urlaub')
    return `geschlossen. öffnet ${items[getDay(now) + 1].morningBegin}`
  }

  function isWithin(hourAndMinStart: string, hourAndMinEnd: string): boolean {
    const hourMinStart = hourAndMinStart.split(':');
    const begin = new Date();
    begin.setHours(Number(hourMinStart[0]));
    begin.setMinutes(Number(hourMinStart[1]));

    const hourMinEnd = hourAndMinEnd.split(':');
    const end = new Date();
    end.setHours(Number(hourMinEnd[0]));
    end.setMinutes(Number(hourMinEnd[1]));

    return isWithinInterval(new Date(), {
      start: begin,
      end: end
    });
  }

}
