import * as C from './styles';

import logo from '../../assets/images/logo.svg';
import Icon from '../Icon';

const MENU_ITEMS = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Artistas', path: '/artists', icon: 'disc' },
  { label: 'Playlists', path: '/playlists', icon: 'play' },
  { label: 'Perfil', path: '/profile', icon: 'user' }
]

const Menu = () => {
  return (
    <C.Wrapper>
      <img src={logo} alt="Luizafy" />
      <C.MenuList>
        {MENU_ITEMS.map(({ label, icon, path }, index) => (
          <C.MenuItem key={`menu-item-${index}`}>
            <a href={path}>
              <Icon name={icon} />
              <span>{label}</span>
            </a>
          </C.MenuItem>
        ))}
      </C.MenuList>
    </C.Wrapper>
  )
}

export default Menu;