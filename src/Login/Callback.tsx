import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { getToken } from '../services/spotify';

import * as C from './styles';

export default function Callback() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    const fetchToken = async () => {
      await getToken(code)

      window.location = "/";
    }

    fetchToken()
  }, [code])

  return (
    <C.Wrapper>
      <C.Text>Redirecionando...</C.Text>
    </C.Wrapper>
  )
}
