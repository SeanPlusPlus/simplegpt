import Head from 'next/head'
import {
  APP_TITLE,
  APP_DESCRIPTION,
  APP_DOMAIN
} from '../constants'

const site = `https://${APP_DOMAIN}`
const image = `${site}/image.png`

export default function Header () {
  return (
    <Head>
      <title>{APP_TITLE}</title>
      <meta name='description' content={APP_DESCRIPTION} />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <link rel='icon' href='/favicon.ico' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={site} />
      <meta property='og:APP_TITLE' content={APP_TITLE} />
      <meta property='og:description' content={APP_DESCRIPTION} />
      <meta property='og:image' content={image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:domain' value={APP_DOMAIN} />
      <meta name='twitter:APP_TITLE' value={APP_TITLE} />
      <meta name='twitter:description' value={APP_DESCRIPTION} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:url' value={site} />
    </Head>
  )
}
