import { useEffect, useState } from 'react';

import type { SpotifyArtistsResponse, ArtistType } from '../types/spotify.type';

import { getSpotify } from "../services/spotify";

type PaginationType = Pick<SpotifyArtistsResponse['artists'], 'limit' | 'total' | 'cursors'>

type UseArtistsProps = {
  data: ArtistType[],
  hasNext: boolean,
  getArtists: VoidFunction
};

const useArtists = (): UseArtistsProps => {
  const [data, setData] = useState<ArtistType[]>([]);
  const [pagination, setPagination] = useState<PaginationType>();
  const after = pagination?.cursors?.after;

  const getArtists = async () => {
    const getNextPage = after ? `&after=${after}` : '';
    const { artists: { items, limit, total, cursors } } = await getSpotify<SpotifyArtistsResponse>('/me/following?type=artist&limit=10' + getNextPage);

    setData(prev => [...prev, ...items]);
    setPagination({ limit, total, cursors });
  }

  useEffect(() => {
    getArtists();
  }, []);

  return { data, hasNext: !!after, getArtists };
}

export default useArtists;
