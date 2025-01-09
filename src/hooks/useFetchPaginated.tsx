import { useEffect, useState } from 'react';

import type { SpotifyPaginationType } from '../types/spotify.type';

import { getSpotify } from "../services/spotify";

type UseFetchPaginated<T> = {
  data: T[],
  hasNextPage: boolean,
  nextPage: VoidFunction
};

const ITEMS_LIMIT = 10;

const useFetchPaginated = <T,>(endpoint: string): UseFetchPaginated<T> => {
  const [data, setData] = useState<T[]>([]);
  const [pagination, setPagination] = useState<SpotifyPaginationType>({ currentPage: 0, limit: 0, total: 0, offset: 0 });

  const hasNextPage = pagination?.currentPage * ITEMS_LIMIT < pagination.total;

  const getData = async () => {
    const offset = ITEMS_LIMIT * pagination.currentPage;
    const { items, limit, total } = await getSpotify<T>(`${endpoint}?limit=${ITEMS_LIMIT}&offset=${offset}`);

    setData(prev => [...prev, ...items]);
    setPagination((prev) => ({ limit, total , currentPage: prev.currentPage + 1 }));
  }

  const nextPage = async () => {
    if (!hasNextPage) return null;

    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, hasNextPage, nextPage };
}

export default useFetchPaginated;
