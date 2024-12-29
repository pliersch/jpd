import { updateState } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStoreFeature, type, withComputed, withHooks, withMethods } from '@ngrx/signals';
import { EntityState, setAllEntities, updateEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { createTags } from '@shop/pages/shop/store/articles/article.model';
import { Tag, ToggleTagAction } from '@shop/pages/shop/store/tags/tag.model';
import { pipe, tap } from 'rxjs';

export function withTagFilter<Entity extends { tags: string[] }>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>() },

    withEntities({ entity: type<Tag>(), collection: 'tag' }),

    withMethods((store) => ({
      setTags: rxMethod<string[]>(
        pipe(
          tap((tagNames) =>
            updateState(store, 'set tags', setAllEntities(createTags(tagNames), { collection: 'tag' })),
          ),
        ),
      ),
      toggleTags: rxMethod<ToggleTagAction>(
        pipe(
          tap((action) =>
            updateState(
              store,
              'tags update',
              updateEntities({ ids: action.ids, changes: { active: action.active } }, { collection: 'tag' }),
            ),
          ),
        ),
      ),
    })),

    withComputed(({ tagEntities, entityMap, ids }) => ({
      filteredItems: computed(() => {
        const entities = ids().map((id) => entityMap()[id]);
        let tags = tagEntities().filter((tag) => tag.active);
        const result: Entity[] = [];
        for (const entity of entities) {
          const containsAllTags = tags.every((tag) => entity.tags.find((tag2) => tag.name === tag2));
          if (containsAllTags) {
            result.push(entity);
          }
        }
        return result;
      }),
    })),

    withHooks({
      // todo hard coded
      onInit({ setTags }): void {
        setTags(['Lab-Tested', 'Fermented', 'Ultra']);
      },
    }),
  );
}
