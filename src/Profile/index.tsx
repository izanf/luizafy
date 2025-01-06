import { useEffect, useState } from "react"

import { getProfile } from "../services/spotify"

export default function Profile() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfile()

      setProfile(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      profile
    </div>
  )
}
