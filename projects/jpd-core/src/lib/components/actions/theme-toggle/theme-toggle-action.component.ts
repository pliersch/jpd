import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { CssDomService, Themes } from '@lib/common';
import { ActionComponent } from '@lib/components';

@Component({
  selector: 'a4w-theme-toggle-action',
  standalone: true,
  imports: [CommonModule, ActionComponent],
  templateUrl: './theme-toggle-action.component.html',
  styleUrl: './theme-toggle-action.component.scss'
})
export class ThemeToggleActionComponent {

  @Input({transform: booleanAttribute}) fab: boolean;

  @Input({transform: booleanAttribute}) button: boolean;

  theme: string = Themes.DARK;

  constructor(private cssDomService: CssDomService) { }

  toggleTheme(): void {
    this.cssDomService.toggleTheme();
  }

}
