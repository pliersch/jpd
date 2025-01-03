import { CommonModule, Location } from '@angular/common';
import { booleanAttribute, Component, HostListener, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NavigationService } from '../../../common';
import { ActionComponent } from '../_base-action/action.component';

@Component({
    selector: 'a4w-back-action',
    imports: [CommonModule, MatButtonModule, MatIconModule, ActionComponent],
    templateUrl: './back-action.component.html',
    styleUrl: './back-action.component.scss'
})
export class BackActionComponent {

  readonly fab = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly button = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  constructor(private location: Location,
              private navigationService: NavigationService,
              private router: Router) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code == 'Escape') {
      this.back();
    }
  }

  back(): void {
    // this.navigationService.goBack();
    this.location.back()
    // this.router.navigate(['/'])
    // console.log('BackActionComponent back: ',)
    // if (window.history.length > 1) {
    //   console.log('BackActionComponent back 1: ',)
    //   this.location.back()
    // } else {
    //   console.log('BackActionComponent back 2: ',)
    //   this.router.navigate(['/blog'])
    // }
  }
}
