import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BreakpointService, Dimension } from '../../../../common';
import { PosterComponent } from '../../../poster/poster.component';

@Component({
  selector: 'a4w-privacy-1',
  standalone: true,
  imports: [CommonModule, PosterComponent],
  templateUrl: './privacy1.component.html',
  styleUrl: './privacy1.component.scss'
})
export class Privacy1Component implements OnInit {

  isXSmall$: Observable<boolean>;
  isSmall$: Observable<boolean>;


  constructor(private breakpointService: BreakpointService) { }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe(res => {
      console.log(res)
      this.isXSmall$ = of(res === Dimension.XSmall);
      this.isSmall$ = of(res === Dimension.Small);
    });
  }
}
