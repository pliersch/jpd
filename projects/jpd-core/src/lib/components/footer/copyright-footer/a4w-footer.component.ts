import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'a4w-copyright-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!--    <div class="container no-padding-tb">-->
    <a class="link flex center-content theme-contrast" href="https://apps4web.de"
       target="_blank">© 2023 apps4web.de</a>
    <!--    </div>-->
  `,
  styles: []
})
export class A4WFooterComponent {

}
