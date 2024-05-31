import { Component } from '@angular/core';

@Component({
  selector: 'a4w-xl-container',
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-screen-xl px-3 mx-auto">
      <ng-content/>
    </div>
  `,
})
export class XlContainerComponent {

}
