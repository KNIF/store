import { calc } from '@chakra-ui/styled-system';
import Head from 'next/head';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

// page component
export default function Page({ title, children }) {
  return (
    <>
      <Head>
        {/* write current page title to browser tab title */}
        <title>{title} - AUDI Store</title>
      </Head>

      <main style={{ minHeight: calc('100vh').subtract('223px') }}>
        <Navbar />

        {/* render child components of page */}
        <div style={{ marginTop: '3rem' }}>{children}</div>
      </main>

      <Footer />
    </>
  );
}
