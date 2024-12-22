import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { BreakpointService, Dimension, FragmentDirective } from '../../../../common';
import { TitleSubtitles } from '../../../../content';
import { BaseComponent } from '../../../core/base/base.component';

export interface Card42Model {
  items: TitleSubtitles[]
}

@Component({
  selector: 'a4w-card42',
  imports: [CommonModule, MatIconModule, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle],
  templateUrl: './card42.component.html',
  styleUrls: ['./card42.component.scss']
})
export class Card42Component extends BaseComponent<Card42Model> {

  dim$: Observable<string>;

  constructor(breakpointService: BreakpointService, override fragment?: FragmentDirective) {
    super('Card42', fragment);
    this.dim$ = breakpointService.dimension$;
  }

  protected readonly Dimension = Dimension;
}
