import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { RouteDomService } from '../../../../common';

@Component({
    selector: 'a4w-admin-panel-menu',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription
    ],
    templateUrl: './admin-panel-menu.component.html',
    styleUrl: './admin-panel-menu.component.scss'
})
export class AdminPanelMenuComponent {

  panelOpenState = true;

  constructor(foo: RouteDomService) {
    console.log('AdminPanelMenuComponent constructor: ', foo.getRouteDom().children)
  }

  accordions = [
    {
      title: '1',
      description: 'you can reorder this list easily',
      subAccordion: [{
        title: 'item 1',
        description: 'description',
        content: 'Content of subpanel 01',
      },
        {
          title: 'item 2',
          description: '',
          content: 'Content of subpanel 02',
        }]
    },
    {
      title: '2',
      description: 'simply click, drag & drop one of us around',
      subAccordion: [{
        title: 'item 1',
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
    {
      title: '3',
      description: 'You will see, it\'s very easy!',
      subAccordion: [{
        title: 'item 1',
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
    {
      title: '4',
      description: 'Try it now, go ahead',
      subAccordion: [{
        title: 'item 1',
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
  ]
}
