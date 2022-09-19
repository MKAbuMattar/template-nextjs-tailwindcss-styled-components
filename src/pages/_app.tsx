import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import SEO from '@/configs/next-seo.config';

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default _App;
