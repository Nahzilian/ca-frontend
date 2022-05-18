import '../styles/index.css'
import type { AppProps } from 'next/app'

// Load data here?

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
