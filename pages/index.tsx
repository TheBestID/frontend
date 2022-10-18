import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-black min-h-[100vh]">
      <Head>
        <title>Soul ID</title>
        <meta name="description" content="Soul ID landing page" />
      </Head>

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="p-4 max-w-md">
        <h1 className="text-primary font-bold text-[6rem]">
          Soul ID
        </h1>
        <p className="text-white text-lg">
          The best protocol for storing your digital avatar.
          Create soul id account to participate in fair
          hackathons and get into tech companies.
        </p>
        </div>

        <div className="p-4 max-w-md">
            <Image
              className="rounded-[2rem]"
              src="/android-chrome-512x512.png"
              width="512"
              height="512"
            />
        </div>
      </main>
    </div>
  )
}

export default Home
