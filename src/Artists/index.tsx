import { useRef, useEffect } from 'react';

import { GenericCard } from '../components';

import * as C from './styles';

import useArtists from "./useArtists";

export default function Artists() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { data, hasNext, getArtists} = useArtists();
  const artists = data.map(({ name, images, external_urls }) => ({
    title: name,
    image: images[0].url,
    path: external_urls.spotify
  }));

  const handleScroll = () => {
    if (pageRef.current && hasNext) {
      const { scrollHeight, scrollTop, clientHeight } = pageRef.current;

      if (scrollHeight - scrollTop - .5 === clientHeight) {
        getArtists();
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
        <C.Title>Top Artistas</C.Title>
        <C.Description>Aqui você encontra seus artistas preferidos</C.Description>
      </C.Header>
      {artists.map((artist, index) => <GenericCard key={index} {...artist} />)}
    </C.Wrapper>
  );
};
