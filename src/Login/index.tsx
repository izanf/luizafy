import { login } from '../services/spotify'

export default function Login() {
  return (
    <div>
      <p>Tela de login</p>
      <button onClick={login}>login</button>
    </div>
  )
}
