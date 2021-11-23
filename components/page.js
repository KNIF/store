import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Page({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
