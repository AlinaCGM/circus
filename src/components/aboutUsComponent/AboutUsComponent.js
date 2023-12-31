import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./aboutUsComponent.css";

function AboutUsComponent() {
  return (
    <div className="container-about-component ">
      <h2 className="title-about">What you will find on the stage</h2>

      <div className="row ">
        <div className=" col-sm-10 col-lg-6 mb-3 mx-sm-auto about-border-component">
          <p className="content-about-component px-4">
            At our circus-themed restaurant, there's a special stage where
            amazing performers do incredible things while you enjoy your meal.
            They make your dinner a real show! Acrobats do flips, people bend in
            super flexible ways, and jugglers do tricks.
            <br />
            The leader of the show talks and makes everyone laugh, and funny
            performers join in too. So, while you eat, you can also watch a
            fantastic performance that makes your meal even more fun. It's like
            having dinner and a show all in one place!
          </p>
        </div>
        <div className="image-bg1 col-sm-10 col-lg-6 mb-3 mx-sm-auto "></div>

        <div className=" image-bg  col-sm-10  col-lg-6 mb-3 mx-sm-auto "></div>
        <div className=" col-sm-10  col-lg-6 mb-3 mx-sm-auto about-border-component">
          <p className="content-about-component px-4">
            Step right into our enchanting circus-themed restaurant, where your
            dining experience is transformed into a captivating spectacle. As
            you savor your meal, the stage comes alive with a group of talented
            performers who add an extra layer of magic to your evening. These
            skilled artists include acrobats who defy gravity, contortionists
            who bend like rubber, and jugglers who create mesmerizing patterns
            in the air. The ringmaster takes center stage, guiding you through
            the night's entertainment. It's not just a meal; it's a show that
            accompanies your dinner, making it a truly extraordinary experience
            that's perfect for the whole family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsComponent;
