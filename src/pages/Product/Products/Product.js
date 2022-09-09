import React from "react";
import Footer from "../../../components/Footer/Footer";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";
import Announcement from "../../../components/Shared/Announcement/Announcement";
import Navbar from "../../../components/Shared/Navbar/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      {/* <Announcement /> */}
      <ProductDetails/>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Product;
