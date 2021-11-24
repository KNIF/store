import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useState } from 'react';
import '@fontsource/inter';

import CartContext from '../lib/context';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
});

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
