import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DocWidgetEditorComponent } from '@app1/components/doc-info/admin/doc-widget-editor.component';
import { DocWidgetComponent } from '@app1/components/doc-info/doc-widget.component';
import { LandingSplashComponent } from '@app1/pages/home/landing-splash/landing-splash.component';
import {
  AbstractDefaultPageComponent,
  Banner1Component,
  Banner2Component,
  Card31Component,
  Card32Component,
  Card42Component,
  Card43Component,
  FragmentDirective,
  GMapsIframeComponent,
  ImageGrid321Component,
  LgContainerComponent,
  LinkFooterDecoratorComponent,
  Parallax1Component,
  ParallaxSectionComponent,
  SectionComponent,
  TextFooterDecoratorComponent,
  TitleSubtitleDecoratorComponent,
  ToggleThemeDirective
} from 'jpd-core';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    GMapsIframeComponent,
    FragmentDirective,
    Card31Component,
    Card32Component,
    ImageGrid321Component,
    TitleSubtitleDecoratorComponent,
    TextFooterDecoratorComponent,
    SectionComponent,
    Card43Component,
    ToggleThemeDirective,
    LandingSplashComponent,
    Card42Component,
    ParallaxSectionComponent,
    LinkFooterDecoratorComponent,
    Banner2Component,
    Banner1Component,
    DocWidgetComponent,
    DocWidgetEditorComponent,
    LgContainerComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractDefaultPageComponent {

  constructor() {
    super();
  }

}
