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
  address: {
    city: 'Xxxxxxxxxxx',
    street: 'Xxxxxx Xxxxxx',
    no: 'xx',
    zip: 99999
  },
  openingHours: [
    // 'Mo. - Fr.: 7:30 - 17:30 Uhr',
    // 'Sa.: nach Absprache',
    // 'So.: Geschlossen'
  ]
}

export const appData: AppConfig = {
    appName: 'Multi Routes',
    company: company,

    componentsByUrl: [
      //////////////////////////////////////////////////////////
      //       APP CONTAINER
      //////////////////////////////////////////////////////////
      {
        url: '', data: [
          //////////////////////////////////////////////////////////
          //                  Appbar Logo
          //////////////////////////////////////////////////////////
          {
            name: 'LogoContainerComponent',
            data: {
              logoUrl: 'assets/svg/logo.svg',
            }
          },
          //////////////////////////////////////////////////////////
          //                  Phone Action
          //////////////////////////////////////////////////////////
          {
            name: 'PhoneActionComponent',
            data: {
              phone: company.phone,
            }
          },
          //////////////////////////////////////////////////////////
          //                   Footer
          //////////////////////////////////////////////////////////
          {
            name: 'FooterComponent',
            data: {
              address: company.address,
              phone: company.phone,
              email: company.email,
              openingHours: company.openingHours
            }
          },
        ]
      },
      //////////////////////////////////////////////////////////
      //       HOME PAGE
      //////////////////////////////////////////////////////////
      {
        url: 'home', data: [
          //////////////////////////////////////////////////////////
          //                  Landing
          //////////////////////////////////////////////////////////
          {
            name: 'Parallax1Component',
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
            name: 'LandingSplashComponent',
            fragment: 'top',
            data: {
              imageUrl: 'assets/svg/apps4web-splash.svg',
            }
          },
          //////////////////////////////////////////////////////////
          //                 Card31 (Blog)
          //////////////////////////////////////////////////////////
          {
            name: 'Card31Component',
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
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'blog',
            data: {
              title: 'Unser Blog',
              subtitle: 'Unbedingt lesen. Alles!'
            }
          },
          {
            name: 'LinkFooterDecoratorComponent',
            fragment: 'blog',
            data: {
              text: 'weiterlesen',
              link: '/blog'
            }
          },
          //////////////////////////////////////////////////////////
          //                   Gallery Grid
          //////////////////////////////////////////////////////////
          {
            name: 'ImageGrid321Component',
            fragment: 'gallery',
            data: {
              image31: {imgUrl: 'assets/img/1x/9.jpg', link: '/gallery'},
              image32: {imgUrl: 'assets/img/1x/10.jpg', link: '/gallery'},
              image33: {imgUrl: 'assets/img/1x/12.jpg', link: '/gallery'},
              image21: {imgUrl: 'assets/img/1x/13.jpg', link: '/gallery'},
              image22: {imgUrl: 'assets/img/1x/14.jpg', link: '/gallery'}
            }
          },
          {
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'gallery',
            data: {
              title: 'Unsere kleine Galerie',
              subtitle: 'Bilder, Bilder, Bilder.'
            }
          },
          {
            name: 'LinkFooterDecoratorComponent',
            fragment: 'gallery',
            data: {
              text: 'alle ansehen',
              link: '/gallery'
            }
          },
          //////////////////////////////////////////////////////////
          //                 Card 43
          //////////////////////////////////////////////////////////
          {
            name: 'Card43Component',
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
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'team',
            data: {
              title: 'Unser Team',
              subtitle: 'Hier könnte durchaus etwas sinnvolles stehen. Ist aber optional.'
            }
          },
          {
            name: 'TextFooterDecoratorComponent',
            fragment: 'team',
            data: {
              text: 'ein simpler Text Decorator',
            }
          },

          //////////////////////////////////////////////////////////
          //                  Banner 1
          //////////////////////////////////////////////////////////
          {
            name: 'Banner1Component',
            fragment: 'banner1',
            data: {
              title: 'Great Stuff',
              subtitle: LoremIpsumFactory.getText(100),
              contentText: LoremIpsumFactory.getText(200),
              postContentText: 'Chef des Hauses',
              imageUrl: 'assets/img/bunny.jpg',
              linkText: 'Schau Dir das an',
              linkUrl: '/blog'
            }
          },
          {
            name: 'Banner1Component',
            fragment: 'banner11',
            data: {
              title: 'Great Stuff',
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
            name: 'ParallaxSectionComponent',
            fragment: 'skills',
            data: {
              backgroundImageUrl: 'assets/img/parallax-section-bg.jpg',
            }
          },
          {
            name: 'Card42Component',
            fragment: 'skills',
            data: {
              items: [
                {
                  title: 'Design',
                  subtitles: ['Foobar', 'Foobar', 'Foobar', 'Foobar']
                },
                {
                  title: 'Development',
                  subtitles: ['Foobar', 'Foobar', 'Foobar', 'Foobar', 'Foobar', 'Foobar']
                },
                {
                  title: 'Services',
                  subtitles: ['Foobar', 'Foobar', 'Foobar', 'Foobar', 'Foobar', 'Foobar']
                },
                {
                  title: 'Sonstige',
                  subtitles: ['Foobar', 'Foobar', 'Foobar', 'Foobar', 'Foobar']
                },
              ]
            },
          },
          {
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'skills',
            data: {
              title: 'Unsere Skills',
              subtitle: 'Eine kleine Auswahl'
            }
          },
        ]
      },

      //////////////////////////////////////////////////////////
      //       TEAM PAGE
      //////////////////////////////////////////////////////////
      {
        url: 'team', data: [

          //////////////////////////////////////////////////////////
          //                  Banner 3
          //////////////////////////////////////////////////////////
          {
            name: 'Banner3Component',
            fragment: 'banner',
            data: {
              title: 'The sad bunny',
              contentText: LoremIpsumFactory.getText(200),
              postContentText: 'this is optional',
              imageUrl: 'assets/img/bunny.jpg',
              linkText: 'zeig her!',
              linkUrl: '//service/care'
            }
          },
          //////////////////////////////////////////////////////////
          //       WaveDesign1Component
          //////////////////////////////////////////////////////////
          {
            name: 'WaveDesign1Component',
            fragment: 'wave',
            data: {
              cards: [
                {
                  title: 'Jane Doe',
                  subtitle: 'Verkauf',
                  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                  imageUrl: 'assets/img/1x/5.jpg'
                },
                {
                  title: 'Peter Zimmer',
                  subtitle: 'Service',
                  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                  imageUrl: 'assets/img/1x/5.jpg'
                },
                {
                  title: 'Klaus von Clausewitz',
                  subtitle: 'Versand',
                  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                  imageUrl: 'assets/img/1x/5.jpg'
                },
                {
                  title: 'Harry Hirsch',
                  subtitle: 'Technik',
                  description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                  imageUrl: 'assets/img/1x/5.jpg'
                },
              ]
            }
          },
          {
            name: 'TitleSubtitleDecoratorComponent',
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
            name: 'Banner2Component',
            fragment: 'banner2',
            data: {
              items: [
                {
                  contentText: LoremIpsumFactory.getText(200),
                  postContentText: 'Chef of Kitchen',
                  bgImageUrl: 'assets/img/1x/13.jpg',
                  bigMessage: 'Come and See',
                  linkUrl: '/',
                  color: '#66a811'
                },
                {
                  contentText: LoremIpsumFactory.getText(100),
                  postContentText: 'Foo Bar',
                  bgImageUrl: 'assets/img/1x/14.jpg',
                  bigMessage: 'Click here',
                  linkUrl: '/',
                  color: '#cebe13'
                },
              ]
            }
          },
        ]
      },
      //////////////////////////////////////////////////////////
      //       BLOG PAGE
      //////////////////////////////////////////////////////////
      {
        url: 'blog', data: [

          //////////////////////////////////////////////////////////
          //                  StoriesOverview1Component
          //////////////////////////////////////////////////////////
          {
            name: 'StoriesOverview1Component',
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
          //                  StoriesGroup1Component
          //////////////////////////////////////////////////////////
          {
            name: 'StoriesGroup1Component',
            fragment: 'blog',
            data: {
              cards: [
                {
                  title: 'Eine Story zum Lesen',
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
                title: 'Eine Story zum Lesen',
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
            name: 'Parallax1Component',
            fragment: 'post',
            data: {
              backgroundImage: 'assets/img/1x/14.jpg',
            }

          },
          //////////////////////////////////////////////////////////
          //                 Card31 (Blog)
          //////////////////////////////////////////////////////////
          {
            name: 'Card31Component',
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
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'recommendation',
            data: {
              title: 'Ähnliche Stories',
            }
          },
        ],
      },
      //////////////////////////////////////////////////////////
      //       POST PAGE
      //////////////////////////////////////////////////////////
      {
        url: 'post', data: [
          // //////////////////////////////////////////////////////////
          // //                 Parallax landing
          // //////////////////////////////////////////////////////////
          // {
          //   name: 'Parallax1Component',
          //   fragment: 'post',
          //   data: {
          //     backgroundImage: 'assets/img/1x/14.jpg',
          //   }
          //
          // },
          // //////////////////////////////////////////////////////////
          // //                 Card31 (Blog)
          // //////////////////////////////////////////////////////////
          // {
          //   name: 'Card31Component',
          //   fragment: 'recommendation',
          //   data: {
          //     items: [
          //       TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(20), LoremIpsumFactory.getText(150), LoremIpsumFactory.getText(10), 'assets/img/1x/14.jpg', '/blog'),
          //       TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(25), LoremIpsumFactory.getText(105), LoremIpsumFactory.getText(10), 'assets/img/1x/17.jpg', '/blog'),
          //       TitleSubtitleMessageFactory.create(LoremIpsumFactory.getText(17), LoremIpsumFactory.getText(142), LoremIpsumFactory.getText(10), 'assets/img/1x/16.jpg', '/blog'),
          //     ]
          //   }
          // },
          // {
          //   name: 'TitleSubtitleDecoratorComponent',
          //   fragment: 'recommendation',
          //   data: {
          //     title: 'Ähnliche Stories',
          //   }
          // },
        ]
      },
      //////////////////////////////////////////////////////////
      //       GALLERY PAGE
      //////////////////////////////////////////////////////////
      {
        url: 'gallery', data: [
          //////////////////////////////////////////////////////////
          //                 Endless Image Grid
          //////////////////////////////////////////////////////////
          {
            name: 'EndlessGridComponent',
            fragment: 'gallery',
            data: {
              columnCount: 4,
            }

          },
          {
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'gallery',
            data: {
              title: 'Unsere große Galerie',
              subtitle: 'Bilder, Bilder, Bilder'
            }
          },
        ]
      },
      //////////////////////////////////////////////////////////
      //       SERVICE PAGE
      //////////////////////////////////////////////////////////

      {
        url: 'service', data: [
          //////////////////////////////////////////////////////////
          //       Tab Nav (Routing)
          //////////////////////////////////////////////////////////
          {
            name: 'TabNavComponent',
            data: {
              routes: [
                {name: 'Health', path: '/service/health'},
                {name: 'Care', path: '/service/care'},
                {name: 'Herbal', path: '/service/herbal'},
              ]
            }
          }]
      },
      //////////////////////////////////////////////////////////
      //       CONTACT PAGE
      //////////////////////////////////////////////////////////
      {
        url: 'contact', data: [
          //////////////////////////////////////////////////////////
          //                  Parallax1Component
          //////////////////////////////////////////////////////////
          {
            name: 'Parallax1Component',
            fragment: 'top',
            data: {
              backgroundImage: 'assets/img/1x/6.jpg',
              // animationImg: 'assets/img/clouds.png',
            }
          },
          //////////////////////////////////////////////////////////
          //                   GMapsIframe
          //////////////////////////////////////////////////////////
          {
            name: 'GMapsIframeComponent',
            data: {
              url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83202.63399778331!2d14.005926363632453!3d52.04056566652021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4707f19da142579f%3A0x83e0c5a2eca11ae0!2sKFZ-Meisterwerkstatt%20Karsten%20Kohts!5e0!3m2!1sde!2sde!4v1696433271595!5m2!1sde!2sde'
            }
          },
          // //////////////////////////////////////////////////////////
          // //                 Disney (Card)
          // //////////////////////////////////////////////////////////
          // {
          //   name: 'DisneyComponent',
          //   fragment: 'disney',
          //   data: {
          //     items: [
          //       TitleSubtitleMessageFactory.create('Foobar 1', LoremIpsumFactory.getText(150), LoremIpsumFactory.getText(10), 'assets/img/1x/14.jpg'),
          //       TitleSubtitleMessageFactory.create('Foobar 2', LoremIpsumFactory.getText(105), LoremIpsumFactory.getText(10), 'assets/img/1x/17.jpg'),
          //       TitleSubtitleMessageFactory.create('Foobar 3', LoremIpsumFactory.getText(150), LoremIpsumFactory.getText(10), 'assets/img/1x/21.jpg'),
          //       TitleSubtitleMessageFactory.create('Foobar 4', LoremIpsumFactory.getText(105), LoremIpsumFactory.getText(10), 'assets/img/1x/22.jpg'),
          //       TitleSubtitleMessageFactory.create('Foobar 5', LoremIpsumFactory.getText(142), LoremIpsumFactory.getText(10), 'assets/img/1x/23.jpg'),
          //       TitleSubtitleMessageFactory.create('Foobar 6', LoremIpsumFactory.getText(142), LoremIpsumFactory.getText(10), 'assets/img/1x/24.jpg'),
          //     ]
          //   }
          // },
          {
            name: 'TitleSubtitleDecoratorComponent',
            fragment: 'disney',
            data: {
              title: 'Disney Plus Design',
              subtitle: 'Look and Feel in blau.'
            }
          },
          //////////////////////////////////////////////////////////
          //                   Footer
          //////////////////////////////////////////////////////////
          {
            name: 'FooterComponent',
            data: {
              address: company.address,
              phone: company.phone,
              email: company.email,
              openingHours: company.openingHours
            }
          },
        ]
      },
    ],
  }
;
