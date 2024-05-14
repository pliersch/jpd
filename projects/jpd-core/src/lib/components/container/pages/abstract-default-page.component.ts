import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationSkipped, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BreakpointService, Dimension, FragmentDirective, NavigationService, PageScrollService } from '../../../common';

@Component({
  selector: 'a4w-default-page',
  standalone: true,
  imports: [
    CommonModule,
    FragmentDirective
  ],
  template: ``,
  styles: []
})
export abstract class AbstractDefaultPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren(FragmentDirective)
  fragments!: QueryList<FragmentDirective>;

  //////////////////////////////////////////////////////////
  // service injection (not the constructor way)
  //////////////////////////////////////////////////////////
  protected router: Router;
  protected route: ActivatedRoute;
  protected breakpointService: BreakpointService;
  protected subscription: Subscription;
  private scrollService: PageScrollService;
  private navigationService: NavigationService;
  protected dimension: string;

  protected constructor() {
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.breakpointService = inject(BreakpointService);
    this.scrollService = inject(PageScrollService);
    this.navigationService = inject(NavigationService);
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe((dim) => {
      this.dimension = dim;
    });
  }

  ngAfterViewInit(): void {
    this.scrollToPosition()
    this.observeNavigation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.navigationService.setScrollTopAfterDestroy(this.scrollService.getScrollTop());
  }

  private observeNavigation(): void {
    this.subscription.add(this.router.events.subscribe(e => {
      // need NavigationSkipped event to detect clicks on fragment/anchor links
      if (e instanceof NavigationSkipped || e instanceof NavigationEnd) {
        this.scrollToFragment();
      }
    }));
  }

  private scrollToPosition(): void {
    // // if scrollTop > 0 we can scroll faster to fragments without timeout (cache exists)
    // // will execute when using forward/backward
    // if (this.navigationService.getCurrent()?.scrollTop > 0) {
    //   this.scrollService.scrollToPosition(this.navigationService.getCurrent().scrollTop)
    //   return;
    // }
    // first time opening
    const fragment = this.findFragment(this.router.url);
    if (fragment) {
      // without timeout the position is wrong, because image size doesn't exist
      // todo now using ssr. try again without timeout
      setTimeout(() => this.scrollService.scrollToPosition(this.getOffsetTop(fragment)));
      return;
    }
    this.scrollService.scrollTop();
  }

  private scrollToFragment(): void {
    const fragment = this.findFragment(this.router.url);
    if (fragment) {
      this.scrollService.scrollToPosition(this.getOffsetTop(fragment));
    } else {
      this.scrollService.scrollTop();
    }
  }

  private findFragment(url: string): string | undefined {
    if (url.includes('#')) {
      return url.split('#').pop()
    }
    return undefined;
  }

  private getOffsetTop(fragment: string): number {
    const element: ElementRef = this.findElementRef(fragment, this.fragments);
    let appbarHeight = 64;
    switch (this.dimension) {
      case Dimension.Small:
        appbarHeight = 120;
        break;
      case Dimension.XSmall:
        appbarHeight = 56;
        break;
    }
    return element.nativeElement.offsetTop - appbarHeight;
  }

  private findElementRef(fragmentName: string, fragments: QueryList<FragmentDirective>): ElementRef {
    let fragment = fragments.find(f => f.name === fragmentName);
    if (!fragment) {
      if (fragmentName != '/') { // no warn for "root"
        console.warn('no fragment found for fragment: ' + fragmentName);
      }
      fragment = fragments.first;
    }
    return fragment.el;
  }

}
