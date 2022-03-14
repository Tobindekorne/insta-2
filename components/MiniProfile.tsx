import { signOut, useSession } from 'next-auth/react'

const MiniProfile = () => {
  const { data: session } = useSession()

  type UserInfo = typeof session & {
    username: string
  }

  const userInfo = session?.user as UserInfo

  return (
    <div className="mt-8 ml-8 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image || ''}
        alt="profile pic"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{userInfo.username || ''}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        onClick={() => signOut()}
        className="text-sm font-semibold text-blue-400"
      >
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
