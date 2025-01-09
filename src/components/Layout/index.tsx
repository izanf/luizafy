import * as C from './styles';
import Menu from '../Menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <C.Wrapper>
      <Menu />
      {children}
    </C.Wrapper>
  )
}

export default Layout;
