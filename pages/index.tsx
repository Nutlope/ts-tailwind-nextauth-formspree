import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Vercel from '../public/another.svg'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next.js Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Image src={Vercel} width="65" height="65" className="text-5x" />
        <h1 className="mt-7 text-4xl font-bold">
          Next.js + Tailwind + TypeScript{' '}
          <span className="text-blue-600">Starter!</span>
        </h1>

        <p className="mt-4 text-xl">
          Comes with <span className="text-blue-600">NextAuth.js</span> and{' '}
          <span className="text-blue-600">FormSpree</span> integrated.
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
