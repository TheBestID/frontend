import { useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  code: string | undefined
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context?.query?.code
  return {
    props: { code },
  }
}

const GithubSuccess: NextPage<Props> = (props) => {
  const { code } = props
  const url = `/register?code=${code}`

  const router = useRouter()
  useEffect(() => {
    router.replace(url)
  }, [router])

  return (
    <div className="bg-[#023047] min-h-[100vh]">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="SoulDev continue registration" />
      </Head>

      <h1 className="text-white text-xl">
        Redirecting to registration
      </h1>

      <Link href={url}>
        <a className="text-primary">
          click here if redirect doesn't work
        </a>
      </Link>

    </div>
  )
}

export default GithubSuccess


