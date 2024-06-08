import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DocWidgetEditorComponent } from '@app1/components/doc-info/admin/doc-widget-editor.component';
import { DocWidgetComponent } from '@app1/components/doc-info/doc-widget.component';
import { AbstractDefaultPageComponent, FragmentDirective, Parallax1Component, SectionComponent } from 'jpd-core';

@Component({
  selector: 'app-doc-page',
  standalone: true,
  imports: [
    CommonModule,
    Parallax1Component,
    FragmentDirective,
    SectionComponent,
    DocWidgetComponent,
    DocWidgetEditorComponent,
  ],
  templateUrl: './doc-page.component.html',
  styleUrls: ['./doc-page.component.scss']
})
export class DocPageComponent extends AbstractDefaultPageComponent {

  edit = false;

  constructor() {
    super();
  }

  onEdit(): void {
    this.edit = true;
  }

  onSave(): void {
    this.edit = false;
  }
}
