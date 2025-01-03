import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shop-not-found',
  imports: [RouterLink, MatAnchor],
  template: `
    <h1>Oops!</h1>
    <h2>Something went wrong.</h2>
    <a mat-button routerLink="/">
      Take me home
      <!--      <mat-icon>home</mat-icon>-->
    </a>
  `,
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NotFoundComponent {}
