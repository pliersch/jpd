import { AppConfig, Company, LoremIpsumFactory } from 'jpd-core';

const company: Company = {
  name: 'Kfz-Meisterwerkstatt Karsten Kohts',
  phone: '035476 270',
  email: 'meisterwerkstatt-karsten.kohts@web.de',
  owner: {
    firstName: 'Karsten',
    lastName: 'Kohts',
    gender: "male"
  },
  representation: 'Herr Karsten Kohts',
  address: {
    city: 'Märkische Heide OT Schulen',
    street: 'Wiesenweg',
    no: '7',
    zip: 15913
  },
  addressString: 'Wiesenweg 7, 15913 Märkische Heide OT Schulen',
  openingHours: [
    'Mo. - Fr.: 7:30 - 17:30 Uhr',
    'Sa.: nach Absprache',
    'So.: Geschlossen'
  ]
}

export const appData: AppConfig = {
    appName: 'KK',
    company: company,
    data: [
      //////////////////////////////////////////////////////////
      //                  Appbar Logo
      //////////////////////////////////////////////////////////
      {
        name: 'LogoContainer',
        data: {
          logoUrl: 'assets/svg/logo.svg',
        }
      },
      //////////////////////////////////////////////////////////
      //                  Phone Action
      //////////////////////////////////////////////////////////
      {
        name: 'PhoneAction',
        data: {
          phone: company.phone,
        }
      },
      //////////////////////////////////////////////////////////
      //                  Landing
      //////////////////////////////////////////////////////////
      {
        name: 'Parallax1',
        fragment: 'top',
        data: {
          backgroundImage: 'assets/img/landing.webp',
        }
      },
      //////////////////////////////////////////////////////////
      //                  Landing Splash
      //////////////////////////////////////////////////////////
      {
        name: 'LandingSplash',
        fragment: 'top',
        data: {
          title: 'Karsten Kohts',
          subtitle: 'KFZ-Meisterwerkstatt',
          imageUrl: 'assets/svg/splash.svg'
        }
      },
      //////////////////////////////////////////////////////////
      //                  Banner 2
      //////////////////////////////////////////////////////////
      {
        name: 'Banner2',
        fragment: 'banner2',
        data: {
          items: [
            // {
            //   contentText: 'Angebot!',
            //   postContentText: 'Reifenwechsel 12€',
            //   bgImageUrl: 'assets/img/reifen_wechsel.webp',
            //   color: '#cebe13'
            // },
            {
              contentText: LoremIpsumFactory.getText(20),
              postContentText: 'sub message',
              bgImageUrl: 'assets/img/dekra-siegel-zertifiziert.webp',
              bigMessage: 'Come and See',
              linkUrl: '/',
              color: '#66a811'
            },
          ]
        }
      },
      //////////////////////////////////////////////////////////
      //                  Banner 5
      //////////////////////////////////////////////////////////
      {
        name: 'Banner5',
        fragment: 'banner5',
        data: {
          title: 'Jetzt anrufen',
          message: 'Vereinbaren Sie einen Termin!',
          // description: 'Lorem ipsum dolor',
          // imageUrl: 'assets/img/reifen_wechsel.webp',

          buttonIcon: 'phone'
        }
      },
      //////////////////////////////////////////////////////////
      //                  Banner-Container Dekra
      //////////////////////////////////////////////////////////
      {
        name: 'BannerContainer1',
        fragment: 'dekra',
        data: {
          color1: '#F00',
          // color2: '#FF0',
        }
      },
      {
        name: 'TextContent1',
        fragment: 'dekra',
        data: {
          title: 'Tüv',
          message: 'Nächster Termin (mit Banner 2 Style)',
          description: 'TODO computable text',
        }
      },
      {
        name: 'ImageContent1',
        fragment: 'dekra',
        data: {
          imageUrl: 'assets/img/hu-au.jpg',
        }
      },
      //////////////////////////////////////////////////////////
      //                 About Card44 ImageCard
      //////////////////////////////////////////////////////////
      {
        name: 'CardPresentation1',
        fragment: 'wir',
        data: {
          cards: [
            {
              title: 'Über uns',
              contentText: 'Kfz-Meisterwerkstatt Karsten Kohts bietet Ihnen Reparaturen und Wartungsservice zu einem sehr transparenten Preis. Kfz-Meisterwerkstatt Karsten Kohts bedient jeglichen Bedarf rund um Fahrzeuge in Märkische Heide und Umgebung, seit unserer Eröffnung im Jahr 2016. Unser Erfolg basiert darauf, dass wir unsere Kunden zufrieden vom Hof fahren lassen und beide Seiten gut schlafen können!',
              // postContentText: 'this is optional',
              imgUrl: 'assets/img/placeholder1.jpg',
              // avatar: 'assets/img/red-john.jpg',
              // linkText: 'weiter lesen',
              // linkUrl: '/blog/post/1'
            },
            {
              title: 'Unsere Dienstleistungen',
              contentText: 'Kfz-Meisterwerkstatt Karsten Kohts beseitigt nicht nur jegliches Problem, das Sie mit Ihrem Auto haben, sondern hilft Ihnen darüber hinaus! Unser erfahrenes Team berät Sie auch gerne unverbindlich, wie Sie in Zukunft Zeit und Geld sparen können. Unsere Dienstleistungen werden von einem fachkundigen und professionellen Team durchgeführt. Unser Team ist bereit für jede Herausforderung, die Ihr Fahrzeug an uns stellt.',
              // postContentText: 'this is optional',
              imgUrl: 'assets/img/placeholder2.jpg',
              // avatar: 'assets/img/red-john.jpg',
              // linkText: 'weiter lesen',
              // linkUrl: '/blog/post/1'
            },
          ],
          imageCards: [
            {
              title: 'Eine Story zum Lesen',
              contentText: LoremIpsumFactory.getText(140),
              imgUrl: 'assets/img/reifen_wechsel.webp',
              // linkText: 'weiter lesen',
              // linkUrl: '/blog/post/1'
            },
            {
              title: 'Eine Story zum Lesen',
              contentText: LoremIpsumFactory.getText(140),
              imgUrl: 'assets/img/Pannenhilfe.webp',
              // linkText: 'weiter lesen',
              // linkUrl: '/blog/post/1'
            },
            {
              title: 'Eine Story zum Lesen',
              contentText: LoremIpsumFactory.getText(140),
              imgUrl: 'assets/img/zahnriemen.jpg',
              // linkText: 'weiter lesen',
              // linkUrl: '/blog/post/1'
            },
          ]

        }
      },

      //////////////////////////////////////////////////////////
      //                 Services
      //////////////////////////////////////////////////////////
      {
        name: 'Cards41',
        fragment: 'service',
        data: {
          cards: [
            {
              title: 'TÜV, HU und AU',
              subtitle: 'Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
              imageUrl: 'assets/img/hu-au.jpg'
            },
            {
              title: 'Reifen- und Felgenservice',
              subtitle: 'Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
              imageUrl: 'assets/img/reifen_wechsel.webp'
            },
            {
              title: 'Reparatur und Wartung',
              subtitle: 'Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
              imageUrl: 'assets/img/Autowerkstatt.webp'
            },
            {
              title: 'Pannenhilfe und Abschleppdienst',
              subtitle: 'Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
              imageUrl: 'assets/img/Pannenhilfe.webp'
            },
          ]
        },
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'service',
        data: {
          title: 'Unser Service',
          subtitle: 'Hier könnte durchaus etwas sinnvolles stehen. Ist aber optional.'
        }
      },

      //////////////////////////////////////////////////////////
      //                 Services v2
      //////////////////////////////////////////////////////////
      {
        name: 'ImageCards2',
        fragment: 'service2',
        data: {
          // headline: 'Unser Service',
          imageCards: [
            {
              title: 'TÜV, HU und AU',
              contentText: 'Lorem ipsum dolor sit amet',
              imgUrl: 'assets/img/hu-au.jpg',
            },
            {
              title: 'Reifen- und Felgenservice',
              contentText: 'Lorem ipsum dolor sit amet',
              imgUrl: 'assets/img/reifen_wechsel.webp',
            },
            {
              title: 'Reparatur und Wartung',
              contentText: 'Lorem ipsum dolor sit amet',
              imgUrl: 'assets/img/Autowerkstatt.webp',
            },
            {
              title: 'Pannenhilfe und Abschleppdienst',
              contentText: 'Lorem ipsum dolor sit amet',
              imgUrl: 'assets/img/Pannenhilfe.webp',
            },
          ]
        },
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'service2',
        data: {
          title: 'Unser Service',
          subtitle: 'Hier könnte durchaus etwas sinnvolles stehen. Ist aber optional.'
        }
      },
      //////////////////////////////////////////////////////////
      //                 Card42 & ParallaxSection
      //////////////////////////////////////////////////////////
      {
        name: 'ParallaxSection',
        fragment: 'skills',
        data: {
          backgroundImageUrl: 'assets/img/block.jpg',
        }
      },
      {
        name: 'Card42',
        fragment: 'skills',
        data: {
          headline: 'Unsere Skills',
          items: [
            {
              title: 'Motor',
              subtitles: ['Motorinstandsetzung', 'Kupplung', 'Rußpartikelfilter', 'Zahnriemen']
            },
            {
              title: 'Karosserie',
              subtitles: ['Anhänger', 'Anhängerkupplung', 'Auspuff', 'Autoglas', 'Bremsen', 'Stoßdämpfer']
            },
            {
              title: 'Services',
              subtitles: ['Hauptuntersuchung', 'Achsvermessung', 'Inspektion', 'Batterie-Service', 'Beleuchtung Lichttest', 'Klima-Service']
            },
            {
              title: 'Sonstige',
              subtitles: ['Car Hifi', 'Mobile Kommunikation', 'Standheizung', 'Tuning', 'Traktorreparatur']
            },
          ]
        },
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'skills',
        data: {
          title: 'Unsere Leistungen',
          subtitle: 'Eine kleine Auswahl. Fragt nach, wir können auch mehr'
        }
      },

      //////////////////////////////////////////////////////////
      //            ContactInfoBoard
      //////////////////////////////////////////////////////////
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'kontakt',
        data: {
          title: 'Tritt mit uns in Kontakt',
          subtitle: 'Du brauchst weitere Informationen? Wir sind für Dich da.'
        }
      },
      {
        name: 'ContactInfoBoard1',
        fragment: 'kontakt',
        data: {
          companyPicture: 'assets/img/location.webp',
        }
      },
      {
        name: 'Opening1',
        fragment: 'kontakt',
        data: {
          openingHours: company.openingHours
        }
      },
      {
        name: 'Address1',
        fragment: 'kontakt',
        data: {
          address: company.address
        }
      },
      {
        name: 'Mail1',
        fragment: 'kontakt',
        data: {
          mail: company.email
        }
      },
      {
        name: 'Phone1',
        fragment: 'kontakt',
        data: {
          phone: company.phone,
          contact: company.owner.firstName + ' ' + company.owner.lastName
        }
      },
      //////////////////////////////////////////////////////////
      //                   GMapsIframe
      //////////////////////////////////////////////////////////
      {
        name: 'GMapsIframe',
        data: {
          url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83202.63399778331!2d14.005926363632453!3d52.04056566652021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4707f19da142579f%3A0x83e0c5a2eca11ae0!2sKFZ-Meisterwerkstatt%20Karsten%20Kohts!5e0!3m2!1sde!2sde!4v1696433271595!5m2!1sde!2sde'
        }
      },
      // fixme SmallFooter2 NOPE!!!!
      //////////////////////////////////////////////////////////
      //                   LegalNotice
      //////////////////////////////////////////////////////////
      {
        name: 'LegalNotice',
        fragment: 'impressum',
        data: {
          company: company.name,
          representation: company.representation,
          address: company.address,
          phone: '',
          fax: '',
          email: '',
          homepage: '',
          jurisdiction: '',
          taxIdentificationNumber: '',
          disclaimer: '',
          consumerInformation: '',
          infringement: '',
          webDeveloper: '',
          copyright: '',
          references: '',
        }
      },
      //////////////////////////////////////////////////////////
      //                   SmallFooter2
      //////////////////////////////////////////////////////////
      {
        name: 'SmallFooter2',
        fragment: 'footer',
        data: {
          routeNames: ['impressum', 'datenschutz']
        }
      },

    ],
  }
;

