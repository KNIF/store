import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta content='#000000' name='theme-color' />
          <meta content='#000000' name='msapplication-TileColor' />

          <link href='./favicon.ico' rel='shortcut icon' />
          <link href='./favicon.ico' rel='icon' />
        </Head>
        <body>
          <ColorModeScript initialColorMode='dark' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
