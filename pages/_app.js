import '../styles/globals.css';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '@/config/theme';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { useRouter } from 'next/router';
import { AuthProvider } from '@/contexts/AuthContext';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import PageShell from '@/components/PageShell/PageShell';

const progress = new ProgressBar({
  size: 2,
  color: '#81E6D9',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith('/auth')) {
    return (
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />

          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <PageShell>
            <Component {...pageProps} />
          </PageShell>
        </ChakraProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;
