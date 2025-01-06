import { useSearchParams } from 'react-router'

import { getToken } from '../services/spotify'
import { useEffect } from 'react'

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
    <div>
      <p>Redirecting...</p>
    </div>
  )
}
