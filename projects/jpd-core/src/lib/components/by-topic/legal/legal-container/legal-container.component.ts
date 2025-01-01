import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, signal, input } from '@angular/core';
import { BreakpointService, Dimension } from '../../../../common';
import { LgContainerComponent } from '../../../container/breakpoints/lg-container.component';
import { PosterComponent } from '../../../poster/poster.component';

@Component({
  selector: 'a4w-legal-container',
  imports: [
    PosterComponent,
    NgTemplateOutlet,
    LgContainerComponent
  ],
  templateUrl: './legal-container.component.html',
  styleUrl: './legal-container.component.scss'
})
export class LegalContainerComponent implements OnInit {

  isMobile = signal(false);

  readonly title = input.required<string>();

  constructor(private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe(dimension => {
      this.isMobile.set(dimension === Dimension.XSmall);
    });
  }

}
