import Head from 'next/head'

const title = "Simple GPT"
const description = "Ask GPT to explain anything in simple terms"
const domain = "simple-gpt.vercel.app"
const site = `https://${domain}`
const image = `${site}/simple.png`

export default function Header() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={site} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" value={domain} />
      <meta name="twitter:title" value={title} />
      <meta name="twitter:description" value={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" value={site} />
    </Head>
  )
}