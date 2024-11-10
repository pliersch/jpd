import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { Themes, ThemeService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
  selector: 'a4w-account-action',
  standalone: true,
  imports: [CommonModule, ActionComponent],
  templateUrl: './account-action.component.html',
  styleUrl: './account-action.component.scss'
})
export class AccountActionComponent {

  @Input({transform: booleanAttribute}) fab: boolean;

  @Input({transform: booleanAttribute}) button: boolean;

  theme: string = Themes.DARK;

  constructor(private cssDomService: ThemeService) { }

  openAccountMenu(): void {
    this.cssDomService.toggleTheme();
  }

}
