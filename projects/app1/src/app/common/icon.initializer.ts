import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function initProjectIcons(matIconRegistry: MatIconRegistry,
                                 domSanitizer: DomSanitizer): () => Promise<void> {
  return () => new Promise(resolve => {
    const path = './assets/svg/icons/';
    const icons: string[] =
      ['block', 'lock', 'medical_mask', 'pan_tool', 'traffic', 'vaccines'];

    for (const icon of icons) {
      matIconRegistry.addSvgIcon(
        icon,
        domSanitizer.bypassSecurityTrustResourceUrl(path + icon + '.svg')
      );
    }
    resolve();
  });
}
