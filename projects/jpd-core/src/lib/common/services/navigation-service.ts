import { Location } from '@angular/common';
import { Injectable } from '@angular/core'
import { NavigationEnd, NavigationStart, Router } from '@angular/router'

export interface HistoryEntry {
  url: string;
  scrollTop: number;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: HistoryEntry[] = [];
  private scrollTop = 0;
  private popState = false;
  private index = -1;
  private isBack = false;
  private isForward = false;
  private isPreviousApp = false;

  constructor(private router: Router,
              private location: Location) { }

  startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isBack = false;
        this.isForward = false;
        this.isPreviousApp = false;
        this.popState = event.navigationTrigger === 'popstate';
        // console.log('NavigationService pop: ',)
        if (this.popState) {
          if (this.index > 0 && event.url === this.getPrevious()?.url) {
            this.isBack = true;
            // console.log('back')
          } else if (this.index > 0) {
            this.isForward = true;
            // console.log('forward')
          } else { // popstate but "back" into previous app. only scrollTop "0" is possible
            this.isPreviousApp = true;
          }
        }
      }

      if (event instanceof NavigationEnd) {
        if (this.isBack) {
          this.history[this.index].scrollTop = this.scrollTop;
          this.index--;
        } else if (this.isForward) {
          this.index++;
          // console.log('++ 1')
        } else if (this.isPreviousApp) {
          // console.log('prev')
        } else {
          const previous: HistoryEntry = this.history[this.index];
          if (previous?.url !== event.urlAfterRedirects) {
            if (this.history.length > 0) {
              previous.scrollTop = this.scrollTop;
            }
            this.history.push({url: event.urlAfterRedirects, scrollTop: 0});
            this.index++;
            // console.log('++ 2')
          }
        }
        this.scrollTop = 0;
        const log: number[] = [];
        this.history.forEach((h) => log.push(h.scrollTop))
        // console.log('nav History / index: ', log, this.index)
      }
    })
  }

  goBack(): void {
    if (this.history.length > 1) {
      this.location.back()
      // console.log('1 back')
    } else {
      void this.router.navigateByUrl("/");
      // console.log('2 home')
    }
  }

  setScrollTopAfterDestroy(top: number): void {
    this.scrollTop = top;
  }

  getCurrent(): HistoryEntry {
    return this.history[this.index];
  }

  getPrevious(): HistoryEntry | undefined {
    return this.history[this.index - 1];
  }

}
