import { useRef } from 'react';

import { Button, ContentWrapper, GenericCard } from '../components';

import * as C from './styles';

import { PlaylistItemType } from '../types/spotify.type';

import { useFetchPaginated, useInfiniteScroll } from '../hooks';

export default function Playlists() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { data, nextPage } = useFetchPaginated<PlaylistItemType>(`/me/playlists`);
  useInfiniteScroll(pageRef, nextPage);
  const playlists = data.map(({ name, images, external_urls, description }) => ({
    title: name,
    image: images[0].url,
    path: external_urls.spotify,
    description
  }));

  return (
    <ContentWrapper ref={pageRef}>
      <C.Header>
        <C.TitleWrapper>
          <C.Title>Minhas Playlists</C.Title>
          <C.Description>Sua coleção pessoal de playlists</C.Description>
        </C.TitleWrapper>
        <Button>Criar playlist</Button>
      </C.Header>
      {playlists.map((playlist, index) => <GenericCard key={index} {...playlist} />)}
    </ContentWrapper>
  );
}
