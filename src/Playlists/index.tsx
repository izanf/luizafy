import { useRef, useEffect } from 'react';

import { Button, GenericCard } from '../components';

import * as C from './styles';

import usePlaylists from "./usePlaylists";

export default function Playlists() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { data, hasNextPage, getPlaylists } = usePlaylists();
  const playlists = data.map(({ name, images, external_urls, description }) => ({
    title: name,
    image: images[0].url,
    path: external_urls.spotify,
    description
  }));

  const handleScroll = () => {
    if (pageRef.current && hasNextPage) {
      const { scrollHeight, scrollTop, clientHeight } = pageRef.current;

      if (scrollHeight - scrollTop - .5 === clientHeight) {
        getPlaylists();
      }
    }
  };

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (pageRef.current) {
        pageRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  });

  return (
    <C.Wrapper ref={pageRef}>
      <C.Header>
        <C.TitleWrapper>
          <C.Title>Minhas Playlists</C.Title>
          <C.Description>Sua coleção pessoal de playlists</C.Description>
        </C.TitleWrapper>
        <Button>Criar playlist</Button>
      </C.Header>
      {playlists.map((playlist, index) => <GenericCard key={index} {...playlist} />)}
    </C.Wrapper>
  );
}
