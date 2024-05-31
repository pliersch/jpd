import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { BreakpointService, Dimension } from '../../../../common';
import { LgContainerComponent } from '../../../container/breakpoints/lg-container.component';
import { PosterComponent } from '../../../poster/poster.component';

@Component({
  selector: 'a4w-legal-container',
  standalone: true,
  imports: [
    PosterComponent,
    AsyncPipe,
    NgTemplateOutlet,
    LgContainerComponent
  ],
  templateUrl: './legal-container.component.html',
  styleUrl: './legal-container.component.scss'
})
export class LegalContainerComponent implements OnInit {

  isMobile = signal(false);

  @Input({required: true})
  title: string;

  constructor(private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe(dimension => {
      this.isMobile.set(dimension === Dimension.XSmall);
    });
  }

}
