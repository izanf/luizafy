import * as C from './styles';

import logo from '../../assets/images/logo.png';
import Icon, { IconsType } from '../Icon';

type MenuItem = {
  label: string;
  path: string;
  icon: IconsType;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', path: '/', icon: 'Home' },
  { label: 'Artistas', path: '/artists', icon: 'Disc' },
  { label: 'Playlists', path: '/playlists', icon: 'Play' },
  { label: 'Perfil', path: '/profile', icon: 'User' }
]

const Menu = () => {
  return (
    <C.Wrapper>
      <C.Logo src={logo} alt="Luizafy" />
      <C.MenuList>
        {MENU_ITEMS.map(({ label, icon, path }, index) => (
          <C.MenuItem key={`menu-item-${index}`}>
            <a href={path}>
              <Icon name={icon} size="small" />
              <span>{label}</span>
            </a>
          </C.MenuItem>
        ))}
      </C.MenuList>
    </C.Wrapper>
  )
}

export default Menu;