import { useRef } from 'react';
import { useNavigate } from "react-router";

import { ContentWrapper, GenericCard } from '../components';

import * as C from './styles';

import { useFetchPaginated, useInfiniteScroll } from '../hooks';
import { ArtistItemType } from '../types/spotify.type';
import { getImage } from '../utils';

export default function Artists() {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const { data, nextPage } = useFetchPaginated<ArtistItemType>(`/me/top/artists`);
  useInfiniteScroll(pageRef, nextPage);
  const artists = data.map(({ name, images, id }) => ({
    title: name,
    image: getImage(images, 128),
    onClick: () => navigate(`/artists/${id}/albums`)
  }));

  return (
    <ContentWrapper ref={pageRef}>
      <C.Header>
        <C.Title>Top Artistas</C.Title>
        <C.Description>Aqui você encontra seus artistas preferidos</C.Description>
      </C.Header>
      {artists.map((artist, index) => <GenericCard key={index} {...artist} avatarRounded />)}
    </ContentWrapper>
  );
};
