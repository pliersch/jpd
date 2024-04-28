import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { LayoutEditorComponent } from '@app1/components/doc-info/admin/layout/layout-editor.component';
import { OpeningHoursComponent } from '@app1/components/doc-info/admin/opening-hours/opening-hours.component';
import { PosterComponent } from 'jpd-core';

@Component({
  selector: 'app-doc-info-editor',
  templateUrl: './doc-info-editor.component.html',
  styleUrls: ['./doc-info-editor.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTabGroup, MatTab, LayoutEditorComponent, PosterComponent, OpeningHoursComponent]
})
export class DocInfoEditorComponent {

  @Output() saveChanges: EventEmitter<void> = new EventEmitter();


  onClickSave(): void {
    this.saveChanges.emit();
  }
}
