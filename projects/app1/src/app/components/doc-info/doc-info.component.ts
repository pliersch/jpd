import { Component, EventEmitter, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DocInfoModel } from '@app1/components/doc-info/doc-info.model';
import { DefaultWidgetComponent } from '@app1/components/doc-info/widgets/default/default-widget.component';

@Component({
  selector: 'app-doc-info',
  standalone: true,
  imports: [
    MatIcon,
    DefaultWidgetComponent,
    MatButton
  ],
  templateUrl: './doc-info.component.html',
  styleUrl: './doc-info.component.scss'
})
export class DocInfoComponent {

  @Output() edit: EventEmitter<boolean> = new EventEmitter();

  _edit = false;

  constructor(protected model: DocInfoModel) { }

  enableEditMode(): void {
    this._edit = !this._edit;
    this.edit.emit(this._edit);
  }
}
