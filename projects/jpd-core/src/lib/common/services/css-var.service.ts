import { Injectable } from '@angular/core';

export enum CssVar {
  AppbarHeight = '--appbar-height',
}

@Injectable({
  providedIn: 'root'
})
export class CssVarService {

  updateCssVar(cssVar: CssVar, value: string): void {
    document.documentElement.style.setProperty(cssVar, value);
  }

  getValue(type: CssVar): string {
    const style = getComputedStyle(document.body);
    return style.getPropertyValue(type);
  }

  getStandardToolbarHeight(): string {
    const style = getComputedStyle(document.body);
    return style.getPropertyValue('--mat-toolbar-standard-height');
  }

}
