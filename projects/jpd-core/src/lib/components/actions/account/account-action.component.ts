import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { Themes, ThemeService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
    selector: 'a4w-account-action',
    imports: [CommonModule, ActionComponent],
    templateUrl: './account-action.component.html',
    styleUrl: './account-action.component.scss'
})
export class AccountActionComponent {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  theme: string = Themes.DARK;

  constructor(private cssDomService: ThemeService) { }

  openAccountMenu(): void {
    this.cssDomService.toggleTheme();
  }

}
