import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function initIcons(matIconRegistry: MatIconRegistry,
                          domSanitizer: DomSanitizer): () => Promise<void> {
  return () => new Promise(resolve => {
    const path = './assets/svg/icons/';
    const icons: string[] =
      ['brightness', 'call', 'vertical_align_top', 'check', 'location_on', 'mail',
        'heart', 'link', 'menu', 'schedule', 'arrow_back'];

    for (const icon of icons) {
      matIconRegistry.addSvgIcon(
        icon,
        domSanitizer.bypassSecurityTrustResourceUrl(path + icon + '.svg')
      );
    }
    resolve();
  });
}
