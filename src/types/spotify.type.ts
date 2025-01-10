export type SpotifyUser = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
};

type Image = {
  url: string;
  height: number;
  width: number;
}

type ExternalUrls = {
  spotify: string
}

export type PlaylistItemType = {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Image[];
  name: string;
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  type: string;
  uri: string;
}

export type SpotifyPaginationType = {
  limit: number;
  total: number;
  currentPage: number;
  offset?: number;
  href?: string;
  next?: string;
  previous?: string;
}

export type SpotifyFetchResponse<T> = SpotifyPaginationType & {
  items: T[];
}

export type AlbumItemType = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: ArtistItemType[];
  album_group?: string;
}

export type ArtistItemType = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  images: Image[];
}

export type ArtistProfileType = {
  images: Image[];
  name: string;
}
