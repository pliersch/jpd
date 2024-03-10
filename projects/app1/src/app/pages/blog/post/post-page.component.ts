import { Component } from '@angular/core';
import {
  Card31Component,
  FragmentDirective,
  LinkFooterDecoratorComponent,
  Parallax1Component,
  Post2Component,
  SectionComponent, TitleSubtitleDecoratorComponent
} from 'jpd-core';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    FragmentDirective,
    SectionComponent,
    Post2Component,
    Parallax1Component,
    Card31Component,
    LinkFooterDecoratorComponent,
    TitleSubtitleDecoratorComponent
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent {

}
