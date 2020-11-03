import { AppProps } from 'next/app';
import useSWR, { SWRConfig } from 'swr';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@styles/accordion.css';
import '@styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
