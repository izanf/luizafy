import { useEffect, useState } from "react";

import * as C from './styles';
import { Button, Avatar } from '../components';

import type { SpotifyUser } from '../types/spotify.type';

import { getProfile } from "../services/spotify";

export default function Profile() {
  const [profile, setProfile] = useState<SpotifyUser | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile()

      setProfile(data)
    }

    fetchData()
  }, []);

  if (!profile) return null

  return (
    <C.Wrapper>
      <Avatar image={profile.images[0].url} name={profile.display_name} />
      <C.Name>{profile.display_name}</C.Name>
      <Button>Sair</Button>
    </C.Wrapper>
  );
};
