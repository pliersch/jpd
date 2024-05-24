export interface TitleSubtitle {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export class TitleSubtitleFactory {
  static create(title: string, subtitle: string, imageUrl?: string): TitleSubtitle {
    return {title, subtitle, imageUrl};
  }
}

export interface TitleSubtitles {
  title: string;
  subtitles: string[];
  imageUrl?: string
}

export class TitleSubtitlesFactory {
  static create(title: string, subtitles: string[], imageUrl?: string): TitleSubtitles {
    return {title, subtitles, imageUrl};
  }
}

export interface TitleDescriptionImage {
  title: string;
  description: string;
  imageUrl: string
}

export class TitleDescriptionImageFactory {
  static create(title: string, description: string, imageUrl: string): TitleDescriptionImage {
    return {title, description, imageUrl};
  }
}

export interface TitleSubtitleDescription {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string
  link?: string
  linkTxt?: string
}

export class TitleSubtitleMessageFactory {
  static create(title: string, subtitle: string, description: string,
                imageUrl?: string, link?: string, linkTxt?: string): TitleSubtitleDescription {
    return {title, subtitle, description, imageUrl, link, linkTxt};
  }
}

export interface TitleSubtitleDescriptionImg {
  title: string;
  subtitle: string;
  description: string;
  image: string
}

//////////////////////////////////////////////////////////
//                   helpers
//////////////////////////////////////////////////////////

function loremIpsum(): string {
  return 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
    'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos ' +
    'et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata ' +
    'sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ' +
    'elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
    'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita ' +
    'kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
    'consetetur sadipscing elitr, sed diam nonumy eirmod ' +
    'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos ' +
    'et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata ' +
    'sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ' +
    'elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
    'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita ' +
    'kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
}

export class LoremIpsumFactory {
  static getText(count: number): string {
    return loremIpsum().substring(0, count);

  }
}
