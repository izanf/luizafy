import { useEffect, useState } from 'react';

import type { SpotifyPlaylistsResponse, PlaylistItemType } from '../types/spotify.type';

import { getSpotify } from "../services/spotify";

type PaginationType = Pick<SpotifyPlaylistsResponse, 'limit' | 'total' | 'next'> & { currentPage: number };

type UsePlaylistsProps = {
  data: PlaylistItemType[],
  hasNextPage: boolean,
  getPlaylists: VoidFunction
};

const ITEMS_LIMIT = 10;

const useArtists = (): UsePlaylistsProps => {
  const [data, setData] = useState<PlaylistItemType[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({ currentPage: 0, limit: 0, total: 0, next: null });

  const hasNextPage = pagination?.currentPage * ITEMS_LIMIT < pagination.total;

  const getPlaylists = async () => {
    const offset = ITEMS_LIMIT * pagination.currentPage;
    const { items, limit, total, next } = await getSpotify<SpotifyPlaylistsResponse>(`/me/playlists?limit=${ITEMS_LIMIT}&offset=${offset}`);

    setData(prev => [...prev, ...items]);
    setPagination((prev) => ({ limit, total, next, currentPage: prev.currentPage + 1 }));
  }

  useEffect(() => {
    getPlaylists();
  }, []);

  return { data, hasNextPage, getPlaylists };
}

export default useArtists;
