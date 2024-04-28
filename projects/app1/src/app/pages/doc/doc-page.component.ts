import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DocInfoEditorComponent } from '@app1/components/doc-info/admin/doc-info-editor.component';
import { DocInfoComponent } from '@app1/components/doc-info/doc-info.component';
import { LandingSplashComponent } from '@app1/pages/home/landing-splash/landing-splash.component';
import { AbstractDefaultPageComponent, FragmentDirective, Parallax1Component, SectionComponent } from 'jpd-core';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    FragmentDirective,
    SectionComponent,
    LandingSplashComponent,
    DocInfoComponent,
    DocInfoEditorComponent,
  ],
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent extends AbstractDefaultPageComponent {

  edit = false;

  constructor() {
    super();
  }

}
