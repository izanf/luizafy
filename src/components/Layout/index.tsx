import { Outlet } from 'react-router-dom';

import * as C from './styles';
import GlobalStyle from '../../GlobalStyle';

import Menu from '../Menu';

const Layout = ({ children }) => {
  return (
    <C.Wrapper>
      <GlobalStyle />
      <Menu />
      <C.Content>
        {children}
      </C.Content>
    </C.Wrapper>
  )
}

export default Layout;
