import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '../../../../../common';
import { BaseComponent } from '../../../../core/base/base.component';
import { Tags1Component } from '../../../tags/tags-1/tags-1.component';
import { ActivityList1Component, ActivityList1Model } from '../../activities/activity-list-1/activity-list-1.component';
import { TopStories1Component, TopStories1Model } from '../../stories/top-stories-1/top-stories-1.component';
import {
  NewsletterSimpleSubscription1Component
} from '../../subscription/simple-1/newsletter-simple-subscription1.component';


export interface StoriesOverview1Model {
  tags: string[];
  activities: ActivityList1Model[];
  topStories: TopStories1Model[];
}

@Component({
  selector: 'a4w-stories-overview-1',
  standalone: true,
  imports: [CommonModule, ActivityList1Component, NewsletterSimpleSubscription1Component, Tags1Component, TopStories1Component],
  templateUrl: './stories-overview1.component.html',
  styleUrl: './stories-overview1.component.scss'
})
export class StoriesOverview1Component extends BaseComponent<StoriesOverview1Model> {

  constructor(override fragment?: FragmentDirective) {
    super('StoriesOverview1', fragment)
  }

}
