import { ChakraProvider, createSystem, defaultConfig, Theme, Toaster } from '@chakra-ui/react';
import '@fontsource/inter';

import { CartWrapper } from '../context/CartContext';
import { ColorModeProvider, useColorMode } from '../context/ColorModeContext';
import { toaster, toasterBottomRight } from '../lib/toaster';

// create custom chakra system with Inter font
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Inter, sans-serif' },
        body: { value: 'Inter, sans-serif' },
      },
    },
  },
});

// inner component that uses color mode context
function AppContent({ Component, pageProps }) {
  const { colorMode } = useColorMode();

  return (
    <Theme appearance={colorMode} style={{ minHeight: '100vh' }}>
      <Component {...pageProps} />
      <Toaster toaster={toaster} />
      <Toaster toaster={toasterBottomRight} />
    </Theme>
  );
}

// global app component
export default function MyApp({ Component, pageProps }) {
  return (
    <CartWrapper>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <AppContent Component={Component} pageProps={pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </CartWrapper>
  );
}
