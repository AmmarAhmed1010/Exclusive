import Navbar from '@/components/Navbar';
import '../globals.css';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>E-commerce</title> {/* Set your desired title here */}
        <meta name="description" content="Exclusive" />
        {/* You can add more meta tags or other head elements here */}
      </Head>
      
      <CartProvider>
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
