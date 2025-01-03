import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { Themes, ThemeService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
    selector: 'a4w-theme-toggle-action',
    imports: [CommonModule, ActionComponent],
    templateUrl: './theme-toggle-action.component.html',
    styleUrl: './theme-toggle-action.component.scss'
})
export class ThemeToggleActionComponent {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  theme: string = Themes.DARK;

  constructor(private cssDomService: ThemeService) { }

  toggleTheme(): void {
    this.cssDomService.toggleTheme();
  }

}
