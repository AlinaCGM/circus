import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./hero.css";
import Booking from "../booking/BookingComponent";

function Hero() {
  const [isBookingOpen, setBookingOpen] = useState(false);

  const openBookingPopup = () => {
    setBookingOpen(true);
  };

  const closeBookingPopup = () => {
    setBookingOpen(false);
  };

  return (
    <div className="container-hero">
      <div className="title-div">
        <h1 className="hero-title">Star Five </h1>

        <h2 className="hero-slogan">Experience the Magic!</h2>

        <img width="220px" height="auto" src={logo} alt="logo" />
        <div className="cta-div mt-2">
          <div className=" btn-hero">
            <a href="#shows" className="cta-button">
              Discover More
            </a>
          </div>
          <div className="mt-4 btn-hero">
            <a href="#" className="cta-button" onClick={openBookingPopup}>
              Book
            </a>
          </div>
        </div>
      </div>
      {isBookingOpen && <Booking closePopup={closeBookingPopup} />}
    </div>
  );
}

export default Hero;
