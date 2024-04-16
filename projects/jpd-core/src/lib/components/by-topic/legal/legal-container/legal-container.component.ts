import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BreakpointService, Dimension } from '../../../../common';
import { PosterComponent } from '../../../poster/poster.component';

@Component({
  selector: 'a4w-legal-container',
  standalone: true,
  imports: [
    PosterComponent,
    AsyncPipe,
    NgTemplateOutlet
  ],
  templateUrl: './legal-container.component.html',
  styleUrl: './legal-container.component.scss'
})
export class LegalContainerComponent implements OnInit {

  @Input({required: true})
  title: string;

  sm = false;
  xs = false;

  constructor(private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe(res => {
      this.sm = res === Dimension.Small;
      this.xs = res === Dimension.XSmall;
    });
  }

}
