import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Subject } from 'rxjs';
import { Themes } from '../const';

export interface ThemeToggleChange {
  add: string;
  remove: string;
}

//////////////////////////////////////////////////////////
//      dark is default! no os theme-check
//////////////////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeState$ = new Subject<ThemeToggleChange>();
  private renderer: Renderer2;
  private theme: string = Themes.DARK;

  constructor(rendererFactory: RendererFactory2,
              // private cookieService: SsrCookieService,
              @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setDarkTheme(): void {
    this.renderer.addClass(this.document.body, Themes.DARK);
    this.renderer.removeClass(this.document.body, Themes.LIGHT);
    this.theme = Themes.DARK;
    localStorage.setItem('theme', this.theme);
    // this.cookieService.set('theme', this.theme);
    this.themeState$.next({add: Themes.DARK, remove: Themes.LIGHT})
  }

  setLightTheme(): void {
    this.renderer.addClass(this.document.body, Themes.LIGHT);
    this.renderer.removeClass(this.document.body, Themes.DARK);
    this.theme = Themes.LIGHT;
    localStorage.setItem('theme', this.theme);
    // this.cookieService.set('theme', this.theme);
    this.themeState$.next({add: Themes.LIGHT, remove: Themes.DARK})
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
