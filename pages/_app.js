import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/inter';

import { AppWrapper } from '../context/AppContext';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AppWrapper>
    </>
  );
}

export default MyApp;
