import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

// Client side
const signin = ({ providers }: any) => {
  return (
    <>
      <Header />

      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educaitonal purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// Server side render
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signin
