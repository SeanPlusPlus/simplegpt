import { GlobalProvider } from '../context/GlobalState';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
