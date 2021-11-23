import { calc } from '@chakra-ui/styled-system';
import Head from 'next/head';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title} - AUDI Store</title>
      </Head>

      <main style={{ minHeight: calc('100vh').subtract('223px') }}>
        <Navbar />
        <div style={{ marginTop: '3rem' }}>{children}</div>
      </main>

      <Footer />
    </>
  );
}
