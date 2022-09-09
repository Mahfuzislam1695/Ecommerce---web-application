import React from "react";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import ProductList from "../../components/ProductList/ProductList";
import Announcement from "../../components/Shared/Announcement/Announcement";
import Navbar from "../../components/Shared/Navbar/Navbar";

const AllProducts = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <ProductList />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default AllProducts;
