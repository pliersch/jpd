import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as CookieConsent from 'vanilla-cookieconsent';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  isMapsAllowed$: ReplaySubject<boolean> = new ReplaySubject();

  acceptService(service: string, category: string): void {
    CookieConsent.acceptService(service, category);
  }

  initCookieConsent(): void {
    CookieConsent.run({
      onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired', cookie);
      },

      onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie);
      },

      onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
      },

      onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
      },

      onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
      },

      onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
      },

      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        functionality: {
          autoClear: {
            cookies: [
              // {
              //   name: 'maps', // string: exact cookie name
              // },
            ],
          },

          services: {
            // maps: {
            //   label: 'Maps Cookie Einstellung',
            //   onAccept: () => { console.log('setupCookieConsent onAccept: ',)},
            //   onReject: () => {console.log('setupCookieConsent onReject: ',)},
            // },
          },
        },
        external: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/, // regex: match all cookies starting with '_ga'
              },
              {
                name: '_gid', // string: exact cookie name
              },
              {
                name: 'maps', // string: exact cookie name
              },
            ],
          },
          services: {
            maps: {
              label: 'Google Maps <a class="link-primary text-decoration-underline" href="datenschutz/#maps" target="_blank">Details</a>',
              onAccept: () => { this.isMapsAllowed$.next(true)},
              onReject: () => { this.isMapsAllowed$.next(false)},
            },
          },
        },
      },

      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: "Cookie Einstellungen!",
              description: "Wir verwenden Cookies, um die Benutzererfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie allen Cookies gemäß unserer Cookie-Richtlinie zu. Sehen Sie sich unsere Datenschutzrichtlinie an.",
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Alle ablehnen",
              showPreferencesBtn: "Einstellungen verwalten",
              footer: "<a href=\"#link\">Datenschutz</a>\n<a href=\"#link\">Bedingungen und Konditionen</a>"
            },
            preferencesModal: {
              title: "Präferenzen für die Zustimmung",
              acceptAllBtn: "Alle akzeptieren",
              acceptNecessaryBtn: "Alle ablehnen",
              savePreferencesBtn: "Einstellungen speichern",
              closeIconLabel: "Modal schließen",
              serviceCounterLabel: "Dienstleistungen",
              sections: [
                {
                  title: 'Verwendung von Cookies',
                  description: `In diesem Bereich können Sie einige Präferenzen im Zusammenhang mit der Verarbeitung Ihrer persönlichen Daten äußern. Sie können Ihre getroffenen Entscheidungen jederzeit überprüfen und ändern, indem Sie dieses Panel über den bereitgestellten Link erneut aufrufen. Um Ihre Zustimmung zu den unten beschriebenen spezifischen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Schalter auf „Aus“ oder verwenden Sie die Schaltfläche „Alle ablehnen“ und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten.`,
                },
                {
                  title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                  description: "Diese Technologien sind erforderlich, um die Kernfunktionen der Website zu aktivieren.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    caption: 'Cookie table',
                    headers: {
                      name: 'Cookie',
                      domain: 'Domain',
                      desc: 'Description',
                    },
                    body: [
                      {
                        name: 'theme',
                        domain: 'https://www.kfz-meisterwerkstatt-kohts.de',
                        desc: 'Speichert das ausgewählte Theme (dark oder light)',
                      },
                    ],
                  },
                },
                {
                  title: "Funktionale Cookies",
                  description: "Funktionale Cookies werden verwendet, um Besucherinformationen auf der Website zu speichern, z. Sprache, Zeitzone, erweiterter Inhalt.",
                  linkedCategory: "functionality",

                  cookieTable: {
                    caption: 'Cookie table',
                    headers: {
                      name: 'Cookie',
                      domain: 'Domain',
                      desc: 'Description',
                    },
                    body: [
                      // {
                      //   name: '',
                      //   domain: '',
                      //   desc: '',
                      // },
                    ],
                  },
                },
                {
                  title: 'Externe Inhalte',
                  description:
                    'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                  linkedCategory: 'external',
                  cookieTable: {
                    caption: 'Cookie table',
                    headers: {
                      name: 'Cookie',
                      domain: 'Domain',
                      desc: 'Description',
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: 'https://www.google.com',
                        desc: 'Description 1',
                      },
                    ],
                  },
                },
                {
                  title: 'Weitere Informationen',
                  description:
                    'Bei Fragen zu meiner Richtlinie zu Cookies und Ihren Auswahlmöglichkeiten' +
                    ' <a href="#kontakt">kontaktieren Sie uns</a>',
                },
              ],
            },
          },
        },
      },
    });
  }
}
