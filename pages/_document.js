import { Html, Head, Main, NextScript } from 'next/document';

// global document
export default function Document() {
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
        {/* render main page */}
        <Main />
        {/* link next.js scripts */}
        <NextScript />
      </body>
    </Html>
  );
}
