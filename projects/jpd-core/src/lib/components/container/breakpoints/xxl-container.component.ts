import { Component } from '@angular/core';

@Component({
    selector: 'a4w-xxl-container',
    imports: [],
    template: `
    <div class="max-w-screen-2xl px-3 mx-auto">
      <ng-content/>
    </div>
  `
})
export class XxlContainerComponent {

}
