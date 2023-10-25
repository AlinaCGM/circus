
import React from "react";
import Hero from "../../components/hero/Hero";
import "./home.css";
import Welcome from "../../components/welcome/Welcome";
import RestaurantComp from "../../components/restaurantComp/RestaurantComp";
import AboutUs from '../../components/aboutUs/AboutUs'

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Welcome />
      <RestaurantComp />
     <AboutUs/>

    </div>
  );
}

export default Home;
