import * as C from './styles';
import Menu from '../Menu';
import GlobalStyle from '../../GlobalStyle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <C.Wrapper>
      <GlobalStyle />
      <Menu />
      {children}
    </C.Wrapper>
  )
}

export default Layout;
