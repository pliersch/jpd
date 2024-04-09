import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function initIcons(matIconRegistry: MatIconRegistry,
                          domSanitizer: DomSanitizer): () => Promise<void> {
  return () => new Promise(resolve => {
    const path = './assets/svg/icons/';
    matIconRegistry.addSvgIcon(
      'brightness',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'brightness.svg')
    );
    matIconRegistry.addSvgIcon(
      'call',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'call.svg')
    );
    matIconRegistry.addSvgIcon(
      'vertical_align_top',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'vertical_align_top.svg')
    );
    matIconRegistry.addSvgIcon(
      'check',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'check.svg')
    );
    matIconRegistry.addSvgIcon(
      'location_on',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'location_on.svg')
    );
    matIconRegistry.addSvgIcon(
      'mail',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'mail.svg')
    );
    matIconRegistry.addSvgIcon(
      'heart',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'heart.svg')
    );
    matIconRegistry.addSvgIcon(
      'link',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'link.svg')
    );
    matIconRegistry.addSvgIcon(
      'menu',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'menu.svg')
    );
    matIconRegistry.addSvgIcon(
      'schedule',
      domSanitizer.bypassSecurityTrustResourceUrl(path + 'schedule.svg')
    );
    resolve();
  });
}
