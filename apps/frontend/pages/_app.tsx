import { FC, useEffect, useState } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import SEO from '@config/next-seo';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/styles';
import theme from 'ui/styles/theme';
import { DefaultSeo } from 'next-seo';

const MyApp: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://radflix.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <DefaultSeo
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            type: 'website',
            site_name: 'Radflix',
          }}
          dangerouslySetAllPagesToNoIndex
          {...SEO}
        />

        <GlobalStyle />
        {mounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
