import Navbar from '@/components/Navbar';
import '../globals.css';
import Head from 'next/head';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
function MyApp({ Component, pageProps }) {
   return (
    
    <>
    <Head>
        <title>E-commerce</title> {/* Set your desired title here */}
        <meta name="description" content="Exclusive" />
        {/* You can add more meta tags or other head elements here */}
      </Head>
      <CartProvider>
    <Navbar/>

  
      <Component {...pageProps} />
    </CartProvider>
      <Footer/>
    </>
   )
}

export default MyApp;
