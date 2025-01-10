import Menu from '../Menu';

import * as C from './styles';

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
