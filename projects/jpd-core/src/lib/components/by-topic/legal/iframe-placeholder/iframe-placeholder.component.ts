import { NgComponentOutlet } from '@angular/common';
import { Component, Input, OnInit, Type } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

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
  standalone: true,
  imports: [
    NgComponentOutlet,
    MatButton,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './iframe-placeholder.component.html',
  styleUrl: './iframe-placeholder.component.scss'
})
export class IframePlaceholderComponent implements OnInit {

  @Input({required: true})
  component: Type<any>

  model: IFramePlaceholderModel = {
    title: 'Google Maps',
    description1: 'An dieser Stelle finden Sie einen externen Inhalt von ',
    description2: 'Sie können ihn sich mit einem Klick anzeigen lassen.',
    description3: 'Ich bin damit einverstanden, dass mir externe Inhalte angezeigt werden. ' +
      'Damit können personenbezogene Daten an Drittplattformen übermittelt werden. ' +
      'Mehr dazu in unseren ',
    linkUrl: 'https://cloud.google.com/maps-platform/terms',
    imageUrl: 'assets/svg/g-maps.svg',
    linkText: 'open link'
  }

  show = false;


  constructor(private cookieService: SsrCookieService) { }

  onClickAllow(): void {
    this.show = true;
    this.cookieService.set('maps', '1');
  }

  onClickAllowOnce(): void {
    this.show = true;
  }

  ngOnInit(): void {
    this.show = this.cookieService.get('maps') === '1';
  }

}
