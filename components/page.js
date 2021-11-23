import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { calc } from '@chakra-ui/styled-system';

export default function Page({ children }) {
  return (
    <>
      <div style={{ minHeight: calc('100vh').subtract('223px') }}>
        <Navbar />
        <main style={{ marginTop: '3rem' }}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
