import { AppProps } from 'next/app';
//import { PropertyProvider } from '@context/property/Property';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@styles/accordion.css';
import '@styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
