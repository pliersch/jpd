import { Component } from '@angular/core';

@Component({
  selector: 'a4w-sm-container',
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-screen-sm px-3 mx-auto">
      <ng-content/>
    </div>
  `,
})
export class SmContainerComponent {

}
