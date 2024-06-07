import { withCallState, withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';

import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { addEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { concatMap, debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { CreateVideoDto, Tag, Video } from './model';
import { TAGS } from './tags';
import { VideoService } from './video.service';

type VideosState = {
  isLoading: boolean;
  activeVideoId: string | undefined;
  activeTags: Tag[];
};

const initialState: VideosState = {
  isLoading: false,
  activeVideoId: undefined,
  activeTags: [],
};

export const VideosStore = signalStore(
  {providedIn: 'root'},
  withCallState(),
  withDevtools('videos'),
  withState(initialState),
  withEntities({entity: type<Video>(), collection: 'videos'}),
  withEntities({entity: type<Tag>(), collection: 'tags'}),
  withComputed(({videosEntities, activeTags}) => ({
    videosCount: computed(() => videosEntities().length),
    filteredVideos: computed(() => filterByTags(videosEntities(), activeTags())),
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
        switchMap(() => {
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
    loadTags(): void {
      const tags: Tag[] = TAGS;
      patchState(store, setAllEntities(tags, {collection: 'tags'}))
    },
    setActiveVideoId(id: string): void {
      patchState(store, {activeVideoId: id})
    },
    setActiveTags(tags: Tag[]): void {
      patchState(store, {activeTags: tags})
    },
    addVideo: rxMethod<CreateVideoDto>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        // tap(() => patchState(store, {isLoading: true})),
        concatMap((dto) => {
          return videosService.create(dto).pipe(
            tap(foo => console.log('store', foo)),
            tapResponse({
              next: (video) => patchState(store, addEntity(video, {collection: 'videos'})),
              error: console.error,
              finalize: () => console.log('FUCCCKCKCCKCK'),
              // finalize: () => patchState(store, {isLoading: false}),
            })
          );
        })
      )
    )
  })),
  withHooks({
    onInit({loadAll, loadTags}): void {
      loadAll('videos');
      loadTags();
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

export function filterByTags(videos: Video[], tags: Tag[]): Video[] {
  const result = [];
  for (const video of videos) {
    const containsAllTags = tags.every(tag => video.tags.find(tag2 => tag.name === tag2));
    if (containsAllTags) {
      result.push(video);
    }
  }
  return result;
}
