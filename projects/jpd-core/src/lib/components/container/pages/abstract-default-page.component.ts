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
  protected router: Router = inject(Router);
  protected route: ActivatedRoute = inject(ActivatedRoute);
  protected breakpointService: BreakpointService = inject(BreakpointService);
  protected subscription: Subscription;
  private scrollService: PageScrollService = inject(PageScrollService);
  private navigationService: NavigationService = inject(NavigationService);

  protected dimension: string;

  // for 2 row appbar if small (tablet) device (extra sub nav)
  private navBarHeight = 0;

  protected constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.breakpointService.dimension$.subscribe((dim) => {
      if (dim === Dimension.Small) {
        this.navBarHeight = 56;
      }
    });
  }

  ngAfterViewInit(): void {
    this.scrollToFragment(this.router.url);
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
        this.scrollToFragment(e.url);
      }
    }));
  }

  private scrollToFragment(url: string): void {
    const fragmentName = this.findFragmentName(url);
    if (fragmentName) {
      const element = this.findElementRef(fragmentName, this.fragments);
      // without timeout the position is wrong, because image size doesn't exist (after opening page)
      setTimeout(() =>
        this.scrollService.scrollToPosition(element.nativeElement.offsetTop - this.navBarHeight));
    } else {
      this.scrollService.scrollTop();
    }
  }

  private findFragmentName(url: string): string | undefined {
    if (url.includes('#')) {
      return url.split('#').pop()
    }
    return undefined;
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
