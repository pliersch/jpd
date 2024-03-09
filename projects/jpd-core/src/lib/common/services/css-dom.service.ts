import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Themes } from '@lib/common/const/themes';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { Subject } from 'rxjs';

export interface ThemeToggleChange {
  add: string;
  remove: string;
}

@Injectable({
  providedIn: 'root'
})
export class CssDomService {

  themeToggle$ = new Subject<ThemeToggleChange>();
  private renderer: Renderer2;
  private theme: string;

  constructor(rendererFactory: RendererFactory2,
              private cookieService: SsrCookieService,
              @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  //////////////////////////////////////////////////////////
  //                   theming
  //////////////////////////////////////////////////////////

  setDarkTheme(): void {
    this.renderer.addClass(this.document.body, Themes.DARK);
    this.renderer.removeClass(this.document.body, Themes.LIGHT);
    this.theme = Themes.DARK;
    this.cookieService.set('theme', this.theme);
    this.themeToggle$.next({add: Themes.DARK, remove: Themes.LIGHT})
  }

  setLightTheme(): void {
    this.renderer.addClass(this.document.body, Themes.LIGHT);
    this.renderer.removeClass(this.document.body, Themes.DARK);
    this.theme = Themes.LIGHT;
    this.cookieService.set('theme', this.theme);
    this.themeToggle$.next({add: Themes.LIGHT, remove: Themes.DARK})
  }

  toggleTheme(): void {
    if (this.theme === Themes.DARK) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  getTheme(): string {
    return this.theme;
  }

}
