import { AppConfig, Company, LoremIpsumFactory, TitleSubtitleMessageFactory } from 'jpd-core';

const company: Company = {
  name: 'Multi Routes',
  phone: '00000 000',
  email: 'xxxx.xxxx@xx.de',
  owner: {
    firstName: 'Xxxxxx',
    lastName: 'Xxxxxx',
    gender: "male"
  },
  representation: 'Herr Xxxxxx',
  address: {
    city: 'Xxxxxxxxxxx',
    street: 'Xxxxxx Xxxxxx',
    no: 'xx',
    zip: 99999
  },
  addressString: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  openingHours: [
    // 'Mo. - Fr.: 7:30 - 17:30 Uhr',
    // 'Sa.: nach Absprache',
    // 'So.: Geschlossen'
  ]
}

export const appData: AppConfig = {
    appName: 'Multi Routes',
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
      // //////////////////////////////////////////////////////////
      // //                   Footer
      // //////////////////////////////////////////////////////////
      // {
      //   name: 'Footer',
      //   data: {
      //     address: company.address,
      //     phone: company.phone,
      //     email: company.email,
      //     openingHours: company.openingHours
      //   }
      // },
      //////////////////////////////////////////////////////////
      //                  Landing
      //////////////////////////////////////////////////////////
      {
        name: 'Parallax1',
        fragment: 'top',
        data: {
          backgroundImage: 'assets/img/landing.jpg',
          // animationImg: 'assets/img/clouds.png',
        }
      },
      //////////////////////////////////////////////////////////
      //               Landing Content
      //////////////////////////////////////////////////////////
      {
        name: 'LandingSplash',
        fragment: 'top',
        data: {
          imageUrl: 'assets/svg/apps4web-splash.svg',
        }
      },
      //////////////////////////////////////////////////////////
      //                 Card31 (Blog)
      //////////////////////////////////////////////////////////
      {
        name: 'Card31',
        fragment: 'blog',
        data: {
          items: [
            TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(20), LoremIpsumFactory.getText(150), LoremIpsumFactory.getText(10), 'assets/img/1x/14.jpg', '/blog'),
            TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(25), LoremIpsumFactory.getText(105), LoremIpsumFactory.getText(10), 'assets/img/1x/17.jpg', '/blog'),
            TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(17), LoremIpsumFactory.getText(142), LoremIpsumFactory.getText(10), 'assets/img/1x/16.jpg', '/blog'),
          ]
        }
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'blog',
        data: {
          title: 'Unser Blog (Card31)',
          subtitle: 'Unbedingt lesen. Alles!'
        }
      },
      {
        name: 'LinkFooterDecorator',
        fragment: 'blog',
        data: {
          text: 'weiterlesen',
          link: '/blog'
        }
      },
      //////////////////////////////////////////////////////////
      //                 Card32 (Blog)
      //////////////////////////////////////////////////////////
      {
        name: 'Card32',
        fragment: 'card32',
        data: {
          items: [
            TitleSubtitleMessageFactory.create(
              'Card 32! Bsp für Verteilung unterschiedlicher Text Längen', LoremIpsumFactory.getText(150),
              LoremIpsumFactory.getText(10), 'assets/img/1x/5.jpg', '/blog', 'open'),
            TitleSubtitleMessageFactory.create(
              'Card 32! Bsp unterschiedlicher Text Längen', LoremIpsumFactory.getText(105),
              LoremIpsumFactory.getText(10), 'assets/img/1x/5.jpg', '/blog', 'open'),
            TitleSubtitleMessageFactory.create(
              'Card 32! Bsp für Text Längen', LoremIpsumFactory.getText(142),
              LoremIpsumFactory.getText(10), 'assets/img/1x/5.jpg', '/blog', 'open'),
          ]
        }
      },
      //////////////////////////////////////////////////////////
      //                   Gallery Grid
      //////////////////////////////////////////////////////////
      {
        name: 'ImageGrid321',
        fragment: 'galerie',
        data: {
          image31: {imgUrl: 'assets/img/1x/9.jpg', link: '/galerie/images/8'},
          image32: {imgUrl: 'assets/img/1x/10.jpg', link: '/galerie/images/9'},
          image33: {imgUrl: 'assets/img/1x/12.jpg', link: '/galerie/images/11'},
          image21: {imgUrl: 'assets/img/1x/13.jpg', link: '/galerie/images/12'},
          image22: {imgUrl: 'assets/img/1x/14.jpg', link: '/galerie/images/13'}
        }
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'galerie',
        data: {
          title: 'Unsere kleine Galerie',
          subtitle: 'Bilder, Bilder, Bilder.'
        }
      },
      {
        name: 'LinkFooterDecorator',
        fragment: 'galerie',
        data: {
          text: 'alle ansehen',
          link: '/galerie'
        }
      },
      //////////////////////////////////////////////////////////
      //                 Card 43
      //////////////////////////////////////////////////////////
      {
        name: 'Card43',
        fragment: 'team',
        data: {
          headline: 'Unsere Mitarbeiter',
          items: [
            {
              title: 'Jane Doe',
              subtitle: 'Verkauf',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/patrick-thumb.jpg'
            },
            {
              title: 'Peter Zimmer',
              subtitle: 'Service',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/patrick-thumb.jpg'
            },
            {
              title: 'Klaus von Clausewitz',
              subtitle: 'Versand',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/patrick-thumb.jpg'
            },
            {
              title: 'Harry Hirsch',
              subtitle: 'Technik',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/patrick-thumb.jpg'
            },
          ]
        }
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'team',
        data: {
          title: 'Card 43',
          subtitle: 'Hier könnte durchaus etwas sinnvolles stehen. Ist aber optional.'
        }
      },
      {
        name: 'TextFooterDecorator',
        fragment: 'team',
        data: {
          text: 'ein simpler Text Decorator',
        }
      },

      //////////////////////////////////////////////////////////
      //                  Banner 1
      //////////////////////////////////////////////////////////
      {
        name: 'Banner1',
        fragment: 'banner1',
        data: {
          title: 'Banner 1',
          subtitle: LoremIpsumFactory.getText(100),
          contentText: LoremIpsumFactory.getText(200),
          postContentText: 'Chef des Hauses',
          imageUrl: 'assets/img/bunny.jpg',
          linkText: 'Schau Dir das an',
          linkUrl: '/blog'
        }
      },
      {
        name: 'Banner1',
        fragment: 'banner11',
        data: {
          title: 'Banner 1',
          subtitle: LoremIpsumFactory.getText(100),
          contentText: LoremIpsumFactory.getText(200),
          postContentText: 'Chef des Hauses',
          imageUrl: 'assets/img/bunny.jpg',
          linkText: 'Schau Dir das an',
          linkUrl: '/blog'
        }
      },

      //////////////////////////////////////////////////////////
      //                 Card42 & ParallaxSection
      //////////////////////////////////////////////////////////
      {
        name: 'ParallaxSection',
        fragment: 'skills',
        data: {
          backgroundImageUrl: 'assets/img/parallax-section-bg.jpg',
        }
      },
      {
        name: 'Card42',
        fragment: 'skills',
        data: {
          items: [
            {
              title: 'Design',
              subtitles: ['Foo', 'Bar', 'Baz', 'Buh', 'Yeah', 'Grrr']
            },
            {
              title: 'Development',
              subtitles: ['Foo', 'Bar', 'Baz', 'Buh', 'Dum', 'Huh']
            },
            {
              title: 'Services',
              subtitles: ['Foo', 'Bar', 'Baz', 'Buh']
            },
            {
              title: 'Sonstige',
              subtitles: ['Foo', 'Bar', 'Baz', 'Buh']
            },
          ]
        },
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'skills',
        data: {
          title: 'Unsere Skills',
          subtitle: 'Card 42'
        }
      },
      //////////////////////////////////////////////////////////
      //                  Banner 3
      //////////////////////////////////////////////////////////
      {
        name: 'Banner3',
        fragment: 'banner',
        data: {
          title: 'The sad bunny (Banner3)',
          contentText: LoremIpsumFactory.getText(200),
          postContentText: 'this is optional',
          imageUrl: 'assets/img/bunny.jpg',
          linkText: 'zeig her!',
          linkUrl: '//service/care'
        }
      },
      //////////////////////////////////////////////////////////
      //                  Banner 4
      //////////////////////////////////////////////////////////
      {
        name: 'Banner4',
        fragment: 'banner4',
        data: {
          title: 'Kein height bei image! (Banner 4)',
          message: 'So groß wie der Text',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
          imageUrl: 'assets/img/bunny.jpg',
          color: '#cebe13'
        }
      },
      //////////////////////////////////////////////////////////
      //       WaveDesign1
      //////////////////////////////////////////////////////////
      {
        name: 'WaveDesign1',
        fragment: 'wave',
        data: {
          cards: [
            {
              title: 'Jane Doe (Card H1)',
              subtitle: 'Verkauf',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/1x/5.jpg'
            },
            {
              title: 'Peter Zimmer (Card H1)',
              subtitle: 'Service',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/1x/5.jpg'
            },
            {
              title: 'Klaus von Clausewitz (Card H1)',
              subtitle: 'Versand',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/1x/5.jpg'
            },
            {
              title: 'Harry Hirsch (Card H1)',
              subtitle: 'Technik',
              description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
              imageUrl: 'assets/img/1x/5.jpg'
            },
          ]
        }
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'wave',
        data: {
          title: 'Unsere Mitarbeiter',
          subtitle: 'Rufen Sie bloß nicht an. All unhöflich und inkompetent'
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
            {
              contentText: 'Banner 2',
              postContentText: 'Chef of Kitchen',
              bgImageUrl: 'assets/img/1x/13.jpg',
              bigMessage: 'Come and See',
              linkUrl: '/',
              color: '#66a811'
            },
            {
              contentText: 'Banner 2',
              postContentText: 'Foo Bar',
              bgImageUrl: 'assets/img/1x/14.jpg',
              bigMessage: 'Click here',
              linkUrl: '/',
              color: '#cebe13'
            },
          ]
        }
      },
      //////////////////////////////////////////////////////////
      //                  StoriesOverview1
      //////////////////////////////////////////////////////////
      {
        name: 'StoriesOverview1',
        fragment: 'blog',
        data: {
          tags: [
            'Angular',
            'Nest JS',
            'RxJs',
            'Nx',
            'NgXs',
          ],
          activities: [
            {title: LoremIpsumFactory.getText(33), link: '/', date: '2024-03-10'},
            {title: LoremIpsumFactory.getText(40), link: '/', date: '2024-03-22'},
            {title: LoremIpsumFactory.getText(50), link: '/', date: '2024-03-28'},
          ],
          topStories: [
            {title: 'Fancy Story', link: '/blog/post/1', imgUrl: 'assets/img/royo/royo05-small.jpg'},
            {title: 'Awesome Story', link: '/blog/post/2', imgUrl: 'assets/img/royo/royo06-small.jpg'},
            {title: 'Great Story', link: '/blog/post/3', imgUrl: 'assets/img/royo/royo07-small.jpg'},
          ],
        }
      },
      //////////////////////////////////////////////////////////
      //                  StoriesGroup1
      //////////////////////////////////////////////////////////
      {
        name: 'StoriesGroup1',
        fragment: 'blog',
        data: {
          cards: [
            {
              title: 'Eine Story zum Lesen (Card 44)',
              contentText: LoremIpsumFactory.getText(140),
              // postContentText: 'this is optional',
              imgUrl: 'assets/img/royo/royo01-small.jpg',
              // avatar: 'assets/img/red-john.jpg',
              linkText: 'weiter lesen',
              linkUrl: '/blog/post/1'
            },
            {
              title: 'Auch eine Story zum Lesen',
              contentText: LoremIpsumFactory.getText(230),
              postContentText: 'this is optional',
              imgUrl: 'assets/img/royo/royo02-small.jpg',
              avatar: 'assets/img/red-john.jpg',
              linkText: 'weiter lesen',
              linkUrl: '/blog/post/1'
            },
            {
              title: 'Noch eine Story zum Lesen',
              contentText: LoremIpsumFactory.getText(200),
              postContentText: 'this is optional',
              imgUrl: 'assets/img/royo/royo03-small.jpg',
              avatar: 'assets/img/red-john.jpg',
              linkText: 'weiter lesen',
              linkUrl: '/blog/post/1'
            },
          ],
          imageCard: {
            title: 'Image Card 1',
            contentText: LoremIpsumFactory.getText(140),
            postContentTitle: 'Patrick Liersch',
            postContentText: 'Story Schreiber',
            imgUrl: 'assets/img/royo/royo04-small.jpg',
            avatar: 'assets/img/red-john.jpg',
            linkText: 'weiter lesen',
            linkUrl: '/blog/post/1'
          },
        }
      },
      //////////////////////////////////////////////////////////
      //                 Parallax landing
      //////////////////////////////////////////////////////////
      {
        name: 'Parallax1',
        fragment: 'post',
        data: {
          backgroundImage: 'assets/img/1x/14.jpg',
        }

      },
      //////////////////////////////////////////////////////////
      //                 Card31 (Blog)
      //////////////////////////////////////////////////////////
      {
        name: 'Card31',
        fragment: 'recommendation',
        data: {
          items: [
            TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(20), LoremIpsumFactory.getText(150), LoremIpsumFactory.getText(10), 'assets/img/1x/14.jpg', '/blog'),
            TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(25), LoremIpsumFactory.getText(105), LoremIpsumFactory.getText(10), 'assets/img/1x/17.jpg', '/blog'),
            TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(17), LoremIpsumFactory.getText(142), LoremIpsumFactory.getText(10), 'assets/img/1x/16.jpg', '/blog'),
          ]
        }
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'recommendation',
        data: {
          title: 'Ähnliche Stories',
        }
      },
      //////////////////////////////////////////////////////////
      //                 Parallax landing
      //////////////////////////////////////////////////////////
      {
        name: 'Parallax1',
        fragment: 'doc',
        data: {
          backgroundImage: 'assets/img/1x/13.jpg',
        }
      },
      // //////////////////////////////////////////////////////////
      // //                 Card31 (Blog)
      // //////////////////////////////////////////////////////////
      // {
      //   name: 'Card31',
      //   fragment: 'recommendation',
      //   data: {
      //     items: [
      //       TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(20), LoremIpsumFactory.getText(150), LoremIpsumFactory.getText(10), 'assets/img/1x/14.jpg', '/blog'),
      //       TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(25), LoremIpsumFactory.getText(105), LoremIpsumFactory.getText(10), 'assets/img/1x/17.jpg', '/blog'),
      //       TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(17), LoremIpsumFactory.getText(142), LoremIpsumFactory.getText(10), 'assets/img/1x/16.jpg', '/blog'),
      //     ]
      //   }
      // },

      //////////////////////////////////////////////////////////
      //                 Endless Image Grid
      //////////////////////////////////////////////////////////
      {
        name: 'EndlessGrid',
        fragment: 'thumbs',
        data: {
          columnCount: 4,
        }
      },
      {
        name: 'TitleSubtitleDecorator',
        fragment: 'thumbs',
        data: {
          title: 'Unsere große Galerie',
          subtitle: 'Bilder, Bilder, Bilder'
        }
      },
      //////////////////////////////////////////////////////////
      //       Tab Nav (Routing)
      //////////////////////////////////////////////////////////
      {
        name: 'TabNav',
        data: {
          routes: [
            {name: 'Health', path: '/service/health'},
            {name: 'Care', path: '/service/care'},
            {name: 'Herbal', path: '/service/herbal'},
          ]
        },
      },
      //////////////////////////////////////////////////////////
      //                  Parallax1
      //////////////////////////////////////////////////////////
      {
        name: 'Parallax1',
        fragment: 'contact',
        data: {
          backgroundImage: 'assets/img/1x/6.jpg',
          // animationImg: 'assets/img/clouds.png',
        }
      },
      {
        name: 'Address1',
        fragment: 'contact',
        data: {
          address: company.address
        }
      },
      {
        name: 'Mail1',
        fragment: 'contact',
        data: {
          mail: company.email
        }
      },
      {
        name: 'Phone1',
        fragment: 'contact',
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
          url:
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83202.63399778331!2d14.005926363632453!3d52.04056566652021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4707f19da142579f%3A0x83e0c5a2eca11ae0!2sKFZ-Meisterwerkstatt%20Karsten%20Kohts!5e0!3m2!1sde!2sde!4v1696433271595!5m2!1sde!2sde'
        }
      },
      // //////////////////////////////////////////////////////////
      // //                   Footer
      // //////////////////////////////////////////////////////////
      // {
      //   name: 'Footer',
      //   data: {
      //     address: company.address,
      //     phone: company.phone,
      //     email: company.email,
      //     openingHours: company.openingHours
      //   }
      // },
    ],
  }
;
