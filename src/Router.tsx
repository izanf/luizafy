import { BrowserRouter, Routes, Route } from "react-router";

import Login from './Login'
import Home from './Home'
import Artists from './Artists'
import Playlists from './Playlists'
import Profile from './Profile'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router