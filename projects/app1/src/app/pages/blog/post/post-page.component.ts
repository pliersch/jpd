import { Component } from '@angular/core';
import {
  Card31Component,
  FragmentDirective,
  Parallax1Component,
  Post1Component,
  SectionComponent,
  TitleSubtitleDecoratorComponent
} from 'jpd-core';

@Component({
    selector: 'app-post-page',
    imports: [
        FragmentDirective,
        SectionComponent,
        Post1Component,
        Parallax1Component,
        Card31Component,
        TitleSubtitleDecoratorComponent
    ],
    templateUrl: './post-page.component.html',
    styleUrl: './post-page.component.scss'
})
export class PostPageComponent {

}
