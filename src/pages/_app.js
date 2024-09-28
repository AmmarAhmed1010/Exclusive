import Navbar from '@/components/Navbar';
import '../globals.css';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Exclusive" />
      </Head>

      <CartProvider>
        <SessionProvider session={pageProps.session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ToastContainer 
            position="top-center" // Set the toast position
            autoClose={3000} 
            hideProgressBar={false} 
            closeOnClick 
            draggable 
            pauseOnHover 
            pauseOnFocusLoss 
            theme="colored" // Optional: choose a theme
          /> 
        </SessionProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
