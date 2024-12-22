import { Component } from '@angular/core';

@Component({
    selector: 'a4w-lg-container',
    imports: [],
    template: `
    <div class="max-w-screen-lg px-3 mx-auto">
      <ng-content/>
    </div>
  `
})
export class LgContainerComponent {

}
