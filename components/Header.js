import Head from 'next/head'

const title = "Simple GPT Foo"
const description = "Ask GPT to explain something in simple terms"

export default function Header() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}