import React from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/Shared/Announcement/Announcement";
import Navbar from "../../components/Shared/Navber/Navber";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Category/>
      <Footer />
    </>
  );
};

export default Home;
