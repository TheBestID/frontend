import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const FourOFour: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[100vh] flex flex-col items-center justify-center">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="404 - not found" />
      </Head>

      <h1 className="text-white text-xl">
        404 - Page Not Found
      </h1>

      <Link href="/">
        <a className="text-primary">
          Go back home
        </a>
      </Link>

    </div>
  )
}
export default FourOFour
