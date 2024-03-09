import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FragmentDirective } from '@lib/common/directives/fragment.directive';
import { BaseComponent } from '@lib/components';
import {
  ActivityList1Component,
  ActivityList1Model
} from '@lib/components/by-topic/blog/activities/activity-list-1/activity-list-1.component';
import {
  TopStories1Component,
  TopStories1Model
} from '@lib/components/by-topic/blog/stories/top-stories-1/top-stories-1.component';
import {
  NewsletterSimpleSubscription1Component
} from '@lib/components/by-topic/blog/subscription/simple-1/newsletter-simple-subscription1.component';
import { Tags1Component } from '@lib/components/by-topic/tags/tags-1/tags-1.component';


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
    super(fragment)
  }

}
