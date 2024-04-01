import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export function initIcons(matIconRegistry: MatIconRegistry,
                          domSanitizer: DomSanitizer): () => Promise<void> {
  return () => new Promise(resolve => {
    matIconRegistry.addSvgIcon(
      "brightness",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/brightness.svg")
    );
    matIconRegistry.addSvgIcon(
      "call",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/call.svg")
    );
    matIconRegistry.addSvgIcon(
      "vertical_align_top",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/vertical_align_top.svg")
    );
    matIconRegistry.addSvgIcon(
      "check",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/check.svg")
    );
    matIconRegistry.addSvgIcon(
      "location_on",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/location_on.svg")
    );
    matIconRegistry.addSvgIcon(
      "mail",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/mail.svg")
    );
    matIconRegistry.addSvgIcon(
      "heart",
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/icons/heart.svg")
    );
    resolve();
  });
}
