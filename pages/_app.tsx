import { AppProps } from 'next/app'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}