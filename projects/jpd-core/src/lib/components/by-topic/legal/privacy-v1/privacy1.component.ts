import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';

@Component({
  selector: 'a4w-privacy-1',
  imports: [CommonModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle],
  templateUrl: './privacy1.component.html',
  styleUrl: './privacy1.component.scss'
})
export class Privacy1Component /*implements OnInit */ {

  // isXSmall$: Observable<boolean>;
  // isSmall$: Observable<boolean>;


  // constructor(private breakpointService: BreakpointService) { }

  // ngOnInit(): void {
  //   this.breakpointService.dimension$.subscribe(res => {
  //     console.log(res)
  //     this.isXSmall$ = of(res === Dimension.XSmall);
  //     this.isSmall$ = of(res === Dimension.Small);
  //   });
  // }
}
