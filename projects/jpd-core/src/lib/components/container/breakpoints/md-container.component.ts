import { Component } from '@angular/core';

@Component({
  selector: 'a4w-md-container',
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-screen-md px-3 mx-auto">
      <ng-content/>
    </div>
  `,
})
export class MdContainerComponent {

}
