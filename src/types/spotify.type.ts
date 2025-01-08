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
  product: string;
  type: string;
  uri: string;
};

export type SpotifyArtistsResponse = {
  artists: {
    href: string;
    limit: number;
    next: string | null;
    cursors: {
      after: string;
    };
    total: number;
    items: ArtistType[];
  };
};

export type ArtistType = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

type PlaylistImage = {
  height: number | null;
  url: string;
  width: number | null;
}

type PlaylistOwner = {
  display_name: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  type: string;
  uri: string;
}

type PlaylistTracks = {
  href: string;
  total: number;
}

export type PlaylistItemType = {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: PlaylistImage[];
  name: string;
  owner: PlaylistOwner;
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTracks;
  type: string;
  uri: string;
}

export type SpotifyPlaylistsResponse = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: PlaylistItemType[];
}
