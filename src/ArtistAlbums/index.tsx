import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as C from './styles';

import { formatDate, getImage } from '../utils';

import { GenericCard, Icon, Avatar, ContentWrapper } from '../components';

import { AlbumItemType, ArtistProfileType } from '../types/spotify.type';

import { useFetchPaginated, useInfiniteScroll } from '../hooks';
import { getSpotify } from '../services/spotify';

export default function ArtistAlbums() {
  const [profile, setProfile] = useState<ArtistProfileType>(null);
  const pageRef = useRef<HTMLDivElement>(null!);
  const navigate = useNavigate();
  const { artistId } = useParams();
  const { data, nextPage } = useFetchPaginated<AlbumItemType>(`/artists/${artistId}/albums`);
  useInfiniteScroll(pageRef, nextPage);

  const albums = data.map(({ name, images, release_date, external_urls }) => ({
    title: name,
    image: getImage(images, 128),
    description: formatDate(release_date),
    onClick: () => window.open(external_urls.spotify)
  }));

  const getArtistProfile = useCallback(async () => {
    const response = await getSpotify<ArtistProfileType>(`/artists/${artistId}`)

    setProfile(response)
  }, [artistId])

  useEffect(() => {
    getArtistProfile();
  }, [getArtistProfile])

  const goBack = () => {
    navigate(-1);
  }

  return (
    <ContentWrapper ref={pageRef}>
      <C.Header>
        <C.GoBackButton onClick={goBack}>
          <Icon name="ArrowLeft" />
        </C.GoBackButton>
        <C.Title>Albums: {profile?.name}</C.Title>
        <Avatar image={profile?.images[0].url} name={profile?.name} size="small" rounded />
      </C.Header>
      <C.Content>
        {albums.map((album, index) => (<GenericCard key={`albums-${album.id}-${index}`} {...album} />))}
      </C.Content>
    </ContentWrapper>
  );
};
