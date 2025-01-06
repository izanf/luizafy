import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from './Login'
import Callback from './Callback'
import Home from './Home'
import Artists from './Artists'
import Playlists from './Playlists'
import Profile from './Profile'

export const ProtectedRoute = ({ children }) => {
  const code = localStorage.getItem('access_token');

  if (!code) {
    return <Navigate to="/login" />;
  }

  return children;
};

const Router = () => {
  return (
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
      </Routes>
    </BrowserRouter>
  )
}

export default Router