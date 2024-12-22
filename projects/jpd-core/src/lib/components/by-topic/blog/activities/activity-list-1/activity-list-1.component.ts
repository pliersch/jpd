import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ActivityList1Model {
  title: string;
  date: string;
  link: string;
}

@Component({
    selector: 'a4w-activity-list-1',
    imports: [CommonModule, RouterLink],
    templateUrl: './activity-list-1.component.html',
    styleUrl: './activity-list-1.component.scss'
})
export class ActivityList1Component {

  @Input()
  activities: ActivityList1Model[]
}
