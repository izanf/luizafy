import { SpotifyFetchResponse } from '../types/spotify.type';
import { interceptResponse } from './interceptors';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID ?? '';
const redirectUri = 'http://localhost:3000/callback';

interceptResponse((response) => {
  if (response.status === 401) {
    logout()
  }
})

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('code_verifier');
  window.location.href = '/';
}

export const login = async () => {
  const generateRandomString = (length: number): string => {
    const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values: Uint8Array = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc: string, x: number) => acc + possible[x % possible.length], "");
  }

  const sha256 = async (plain: string): Promise<ArrayBuffer> => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

  const base64encode = (input: ArrayBuffer): string => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const scope = 'user-read-private user-read-email user-follow-read';
  const authUrl = new URL("https://accounts.spotify.com/authorize")

  window.localStorage.setItem('code_verifier', codeVerifier);

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

export const getToken = async (code: string) => {
  const codeVerifier = localStorage.getItem('code_verifier');
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier ?? '',
    }),
  }

  const body = await fetch('https://accounts.spotify.com/api/token', payload);
  const response = await body.json();

  if (response.access_token) {
    localStorage.setItem('access_token', response.access_token);
  }
}

export const getSpotify = async <T>(endpoint: string): Promise<SpotifyFetchResponse<T>> => {
  const accessToken = localStorage.getItem('access_token');

  const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data = await response.json();

  return data
}
