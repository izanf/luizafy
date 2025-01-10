import { useEffect, useState } from "react";

import * as C from './styles';
import { Button, Avatar, ContentWrapper } from '../components';

import type { SpotifyUser } from '../types/spotify.type';

import { getSpotify, logout } from "../services/spotify";

export default function Profile() {
  const [profile, setProfile] = useState<SpotifyUser | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpotify<SpotifyUser>('/me')

      setProfile(data)
    }

    fetchData()
  }, []);

  if (!profile) return null

  return (
    <ContentWrapper>
      <C.Wrapper>
        <Avatar image={profile.images[0].url} name={profile.display_name} rounded />
        <C.Name>{profile.display_name}</C.Name>
        <Button onClick={logout}>Sair</Button>
      </C.Wrapper>
    </ContentWrapper>
  );
};
