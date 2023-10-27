import React from "react";
import Hero from "../../components/hero/Hero";
import "./home.css";
import Welcome from "../../components/welcome/Welcome";
import RestaurantComp from "../../components/restaurantComp/RestaurantComp";
import AboutUsHome from "../../components/aboutUsHome/AboutUsHome";
import Carousel from "../../components/carousel/Carousel";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Welcome />
      <RestaurantComp />
      <AboutUsHome />
      <Carousel />
    </div>
  );
}

export default Home;
