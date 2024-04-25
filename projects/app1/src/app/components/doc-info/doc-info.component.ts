import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DocInfoModel } from '@app1/components/doc-info/doc-info.model';
import { DefaultItemComponent } from '@app1/components/doc-info/items/default-item/default-item.component';

@Component({
  selector: 'app-doc-info',
  standalone: true,
  imports: [
    MatIcon,
    DefaultItemComponent
  ],
  templateUrl: './doc-info.component.html',
  styleUrl: './doc-info.component.scss'
})
export class DocInfoComponent {

  constructor(protected model: DocInfoModel) { }

}
