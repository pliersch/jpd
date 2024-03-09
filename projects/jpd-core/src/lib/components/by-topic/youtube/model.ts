export interface Video {
  id: string;
  artist: string;
  title: string;
  posterUrl: string;
  tags: string[];
}

export interface TagItem {
  name: string;
  active: boolean;
}
