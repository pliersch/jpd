import * as CookieConsent from 'vanilla-cookieconsent';

export function initCookieConsent(): () => Promise<void> {
  return () => new Promise(resolve => {

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
              {
                name: '_gid', // string: exact cookie name
              },
            ],
          },

          services: {
            maps: {
              label: 'Theme ',
              onAccept: () => {},
              onReject: () => {},
            },
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
            ],
          },

          services: {
            youtube: {
              label: 'Google Maps (dummy)',
              onAccept: () => {},
              onReject: () => {},
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
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
                        name: '',
                        domain: '',
                        desc: '',
                      },
                    ],
                  },
                },
                {
                  title: "Funktionalitäts Cookies",
                  description: "Funktionalitätscookies werden verwendet, um Besucherinformationen auf der Website zu speichern, z. Sprache, Zeitzone, erweiterter Inhalt.",
                  linkedCategory: "functionality",
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
                        domain: window.location.hostname,
                        desc: 'Speichert das ausgewählte Theme (dark oder light)',
                      },
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
                        domain: window.location.hostname,
                        desc: 'Description 1',
                      },
                    ],
                  },
                },
                {
                  title: 'More information',
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                },
              ],
            },
          },
        },
      },
    });
    resolve();
  });
}
