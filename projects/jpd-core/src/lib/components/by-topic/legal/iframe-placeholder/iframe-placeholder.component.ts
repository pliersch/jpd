import { AsyncPipe } from '@angular/common';
import { Component, Type, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CookieConsentService } from '../../../../common';

export interface IFramePlaceholderModel {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
}

@Component({
  selector: 'a4w-iframe-placeholder',
  imports: [
    MatButton,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './iframe-placeholder.component.html',
  styleUrl: './iframe-placeholder.component.scss'
})
export class IframePlaceholderComponent {

  readonly component = input.required<Type<any>>();

  model: IFramePlaceholderModel = {
    title: 'Google Maps Karte anzeigen',
    description1: 'An dieser Stelle finden Sie einen externen Inhalt von Google Maps',
    description2: 'Sie können sich die Karte mit einem Klick anzeigen lassen.',
    description3: 'Ich bin damit einverstanden, dass mir der externe Inhalte angezeigt wird. ' +
      'Damit können personenbezogene Daten an Drittplattformen übermittelt werden. ' +
      'Mehr dazu in unseren ',
    linkUrl: 'https://cloud.google.com/maps-platform/terms',
    imageUrl: 'assets/svg/g-maps.svg',
    linkText: 'open link'
  }

  //fixme do it generic
  isMapsAllowed$: Observable<boolean>;

  constructor(private cookieConsentService: CookieConsentService) {
    this.isMapsAllowed$ = cookieConsentService.isMapsAllowed$;
  }

  onClickAllow(): void {
    // this.show = true;
    this.cookieConsentService.acceptService('maps', 'external');
    // CookieConsent.acceptService('maps', 'external');
  }

  onClickAllowOnce(): void {
    this.isMapsAllowed$ = of(true);
  }
}
