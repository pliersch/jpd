export interface Video {
  id: string;
  videoId: string;
  artist: string;
  title: string;
  posterUrl: string;
  tags: string[];
}

export interface Tag {
  id: number;
  name: string;
  active: boolean;
}

export class CreateVideoDto {
  readonly artist: string;
  readonly title: string;
  readonly videoId: string;
  readonly posterUrl: string;
  readonly tags: string[];
}
