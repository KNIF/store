import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

// global document
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* add default theme color meta tags */}
          <meta content='#000000' name='theme-color' />
          <meta content='#000000' name='msapplication-TileColor' />
          {/* add favicons */}
          <link href='./favicon.ico' rel='shortcut icon' />
          <link href='./favicon.ico' rel='icon' />
        </Head>
        <body>
          {/* set default color mode to dark */}
          <ColorModeScript initialColorMode='dark' />
          {/* render main page */}
          <Main />
          {/* link next.js scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
