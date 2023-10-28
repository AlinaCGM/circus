import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./aboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="container-about-page ">
      <header className="text-center pt-4">
        <h2>About Us</h2>
      </header>

      <div className="row ">
        <div className=" col-sm-10 col-lg-6 mb-3 mx-sm-auto content-about-page">
          <p className="content-about px-4">
            Located in the heart of the city, our establishment offers an
            enchanting dining experience that transcends the ordinary. With a
            vibrant and whimsical ambiance, Star 5 Restaurant invites guests to
            step into a world of wonder. Our menu is a carefully curated blend
            of global cuisines, showcasing the finest ingredients and culinary
            artistry. Every dish is a masterpiece that tantalizes the taste
            buds. <br />
            <br /> But the magic doesn't stop there; we feature live
            performances and themed events, making every visit a celebration.
            <br />
            <br />
            Whether you're here for a romantic dinner or a special event, every
            visit to Star 5 Restaurant is a celebration. We're here to create
            unforgettable memories, one plate and one act at a time. Join us for
            a truly unique and unforgettable dining adventure that will stay
            with you long after you leave our doors.
          </p>
        </div>
        <div className="image-bg-page1 col-sm-10 col-lg-6 mb-3 mx-sm-auto "></div>

        <div className=" image-bg-page2 col-sm-10  col-lg-6 mb-3 mx-sm-auto "></div>
        <div className=" col-sm-10  col-lg-6 mb-3 mx-sm-auto content-about-page">
          <p className="content-about px-4">
            Our venue provides a captivating dining adventure that goes beyond
            the usual. With a lively and fantastical atmosphere, Star 5
            Restaurant welcomes patrons into a realm of enchantment. Our
            culinary selection is a thoughtfully crafted fusion of international
            flavors, highlighting premium ingredients and culinary expertise.
            Each plate is a work of art that delights the customers. Yet, the
            enchantment doesn't end here; we present live shows and special
            themed occasions, turning every visit into a joyous festivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
