import type { NextComponentType } from 'next'
import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories: NextComponentType = () => {
  const [suggestions, setSuggestions] = useState(Array)
  const { data: session } = useSession()

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  type UserInfo = typeof session & {
    username: string
  }

  const userInfo = session?.user as UserInfo

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session?.user?.image || ''} username={userInfo.username} />
      )}

      {suggestions.map<Object>((profile: any) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
