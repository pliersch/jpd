import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { CreateDocWidgetItemResult, DocWidgetItem, Topic } from '@app1/components/doc-info/store/doc-widget.model';
import { DocWidgetService } from '@app1/components/doc-info/store/doc-widget.service';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { formatDistance, isAfter, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';
import { pipe, switchMap } from 'rxjs';

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
  withEntities({entity: type<DocWidgetItem>(), collection: 'widgets'}),
  withComputed(({widgetsEntities}) => ({
    getAvailableWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'none')),
    getHighWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'high')),
    getLowWidgets: computed(() => widgetsEntities().filter(info => info.visibility === 'low')),
    getLastUpdate: computed(() => {
      const date = widgetsEntities().length > 0 ? findNewestUpdate(widgetsEntities()) : undefined;
      let last = '';
      if (date) {
        const time = formatDistance(date, new Date(), {locale: de});
        last = `Letzte Änderung: vor ${time}`
      }
      return last;
    }),
  })),
  withMethods((store, service = inject(DocWidgetService)) => ({
      loadAll: rxMethod<void>(
        pipe(
          // tap(() => patchState(store, {isLoading: true})),
          switchMap(() => {
            return service.getAll().pipe(
              tapResponse({
                next: (widgets) => patchState(store, setAllEntities(createItems(widgets), {collection: 'widgets'})),
                error: console.error,
                // finalize: () => computeWidgets(store.widgetsEntities()),
              })
            );
          })
        )
      ),
      update: rxMethod<DocWidgetItem>(
        pipe(
          switchMap((widget) => {
            return service.update(widget.id, {visibility: widget.visibility}).pipe(
              tapResponse({
                next: (widget) =>
                  patchState(store, updateEntity({
                    id: widget!.id,
                    changes: {update: widget!.update, visibility: widget!.visibility}
                  }, {collection: 'widgets'})),
                error: console.error,
              })
            );
          })
        )
      ),
      updateBySse(widget: DocWidgetItem): void {
        patchState(store, updateEntity({
          id: widget!.id,
          changes: {update: widget!.update, visibility: widget!.visibility}
        }, {collection: 'widgets'}))
      },
      setMessage(topic: Topic, msg: string): void {
        const widget = store.widgetsEntities().find(w => w.topic === topic);
        widget!.message = msg;
        patchState(store, updateEntity({id: widget!.id, changes: {message: widget!.message}}, {collection: 'widgets'}))
      }
    }),
  ),
  withHooks({
    onInit({loadAll}): void {
      loadAll();
    }
  })
);

export function createItems(items: CreateDocWidgetItemResult[]): DocWidgetItem[] {
  const result: DocWidgetItem[] = [];
  for (const item of items) {
    result.push({
      id: item.id,
      topic: item.topic,
      update: parseISO(item.update),
      message: item.message,
      svg: item.svg,
      visibility: item.visibility
    });
  }
  return result;
}

export function findNewestUpdate(items: DocWidgetItem[]): Date {
  let newest: Date = items[0].update;
  for (let i = 1; i < items.length; i++) {
    if (isAfter(items[i].update, newest)) {
      newest = items[i].update;
    }
  }
  return newest;
}

// export function sortByDate(w1: DocWidgetItem, w2: DocWidgetItem): number {
//   // console.log('sortByDate sortByDate: ', w1.update, w2.update);
//   const compare = Number(w1.update) - Number(w2.update);
//   if (compare > 0) {
//     return 1;
//   } else if (compare < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

