import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RecipesStore } from '@app1/pages/baking/store/recipes.store';
import { getState } from '@ngrx/signals';

@Component({
    selector: 'app-bread-table',
    providers: [RecipesStore],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        JsonPipe
    ],
    templateUrl: './bread-table.component.html',
    styleUrl: './bread-table.component.scss'
})
export class BreadTableComponent {

  readonly store = inject(RecipesStore);

  constructor() {
    effect(() => {
      // 👇 The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('recipes state changed', state);
    });
  }
}
