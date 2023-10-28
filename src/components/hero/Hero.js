import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./hero.css";

function Hero() {
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
            <Link className="cta-button" eventKey="5" as={Link} to="/book">
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
