import { useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  code: string | undefined,
  email_token: string | undefined,
  email: string | undefined,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context?.query?.code
  const email = context?.query?.email
  const email_token = context?.query?.email_token
  return {
    props: { code, email_token, email },
  }
}

const EmailSuccess: NextPage<Props> = (props) => {
  const { code, email_token, email } = props
  const url = `/register?code=${code}&email=${email}&email_token=${email_token}`

  const router = useRouter()
  useEffect(() => {
    router.replace(url)
  }, [router, url])

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
          click here if redirect doesn&apos;t work
        </a>
      </Link>

    </div>
  )
}

export default EmailSuccess
