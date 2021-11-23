import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '3rem', marginBottom: '10rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
