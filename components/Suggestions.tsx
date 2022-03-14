import faker from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'
import { useEffect, useState } from 'react'

type FakerProfile = ContextualCard & {
  id: number
}

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState(Array)

  useEffect(() => {
    const suggestions: Array<FakerProfile> = [...Array(5)].map(
      (_, i): FakerProfile => ({
        ...faker.helpers.contextualCard(),
        id: i,
      })
    )

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-8">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-400">See All</button>
      </div>

      {suggestions &&
        suggestions.length > 0 &&
        suggestions.map((profile: any) => (
          <div
            key={profile.id}
            className="mt-3 flex items-center justify-between"
          >
            <img
              className="h-10 w-10 rounded-full border p-[2px]"
              src={profile.avatar}
              alt=""
            />

            <div className="ml-4 flex-1">
              <h2 className="text-sm font-bold">{profile.username}</h2>
              <h3 className="text-xs text-gray-400">
                Works at {profile.company?.name}
              </h3>
            </div>

            <button className="text-xs font-semibold text-blue-400">
              Follow
            </button>
          </div>
        ))}
    </div>
  )
}

export default Suggestions
