import { login } from '../services/spotify';

import logo from '../assets/images/logo.svg';

import { Button }from '../components';

import * as C from './styles';

export default function Login() {
  return (
    <C.Wrapper>
      <C.Figure>
        <C.Image src={logo} alt="Luizafy" />
      </C.Figure>
      <C.Text>Entre com sua conta Spotify clicando no botão abaixo.</C.Text>
      <Button onClick={login}>Entrar</Button>
    </C.Wrapper>
  )
}
