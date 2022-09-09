import React from 'react';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import Announcement from '../../components/Shared/Announcement/Announcement';
import Navbar from '../../components/Shared/Navbar/Navbar';

const Checkout = () => {
    return (
        <>
             <Navbar />
      {/* <Announcement /> */}
      <Cart/>
      <Footer />
        </>
    );
};

export default Checkout;