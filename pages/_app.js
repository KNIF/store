import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/inter';

// add cart state provider to global context by wrapping every component with it
import { CartWrapper } from '../context/CartContext';

// set custom fonts for the site
const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});

// global app component
export default function MyApp({ Component, pageProps }) {
  return (
    <CartWrapper>
      {/* apply chakra ui styles with custom theme */}
      <ChakraProvider theme={theme}>
        {/* render components of site */}
        <Component {...pageProps} />
      </ChakraProvider>
    </CartWrapper>
  );
}
