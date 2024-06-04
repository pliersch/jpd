import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';

import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { Video } from './model';
import { VideoService } from './video.service';

type VideosState = {
  isLoading: boolean;
  activeVideoId: string | undefined;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: VideosState = {
  isLoading: false,
  activeVideoId: undefined,
  filter: {query: '', order: 'asc'},
};

export const VideosStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('videos'),
  withState(initialState),
  withEntities({entity: type<Video>(), collection: 'videos'}),
  withComputed(({videosEntities, filter}) => ({
    videosCount: computed(() => videosEntities().length),
    sortedVideos: computed(() => {
      // const direction = filter.order() === 'asc' ? 1 : -1;
      return videosEntities().sort(sortById);
    }),
  })),

  withMethods((store, videosService = inject(VideoService)) => ({
    loadAll: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, {isLoading: true})),
        switchMap((query) => {
          return videosService.getAll().pipe(
            tapResponse({
              next: (videos) => patchState(store, setAllEntities(videos, {collection: 'videos'})),
              error: console.error,
              finalize: () => patchState(store, {isLoading: false}),
            })
          );
        })
      )
    ),
    setActiveVideoId(id: string): void {
      patchState(store, {activeVideoId: id})
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({filter: {...state.filter, order}}));
    },
  })),
  withHooks({
    onInit({loadAll}): void {
      loadAll('videos')
    }
  })
);

export function sortById(p1: Video, p2: Video): number {
  const compare = Number(p1.artist.at(0)) - Number(p2.artist.at(0));
  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else {
    return 0;
  }
}
