import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from './Login'
import Callback from './Login/Callback'
import Home from './Home'
import Artists from './Artists'
import ArtistAlbums from './ArtistAlbums'
import Playlists from './Playlists'
import Profile from './Profile'

import { Layout } from './components';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const code = localStorage.getItem('access_token');

  if (!code) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      {children}
    </Layout>
  );
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route index element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/artists" element={
        <ProtectedRoute>
          <Artists />
        </ProtectedRoute>
      } />
      <Route path="/artists/:artistId/albums" element={
        <ProtectedRoute>
          <ArtistAlbums />
        </ProtectedRoute>
      } />
      <Route path="/playlists" element={
        <ProtectedRoute>
          <Playlists />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
