import { BreakpointObserver } from "@angular/cdk/layout";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppDataService } from '../../../../core';

@Component({
    selector: 'a4w-long-txt-1',
    imports: [CommonModule],
    templateUrl: './long-text1.component.html',
    styleUrls: ['./long-text1.component.scss']
})
export class LongText1Component {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 740px)')
    .pipe(
      map(result => result.matches)
    );

  // items: TitleDescriptionImage[] = this.appDataService.getComponentData(this);

  constructor(private breakpointObserver: BreakpointObserver,
              private appDataService: AppDataService) { }

}
