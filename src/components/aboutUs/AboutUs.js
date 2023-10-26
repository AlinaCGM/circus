import React from "react";
import "./aboutUs.css";
import homegirlsImage from "../../assets/homegirls.png";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="jumbotron jumbotron-fluid">
        <main>
          <div className="row">
            <header>
              <h2>About Us</h2>
            </header>
          </div>
          <div>
            <div className="row">
              <div className="col-lg-6" style={{ backgroundColor: "#343438" }}>
                <p>
                  Located in the heart of the city, our establishment offers an
                  enchanting dining experience that transcends the ordinary.
                  With a vibrant and whimsical ambiance, Star 5 Restaurant
                  invites guests to step into a world of wonder.{" "}
                  <br />
                  <br />
                  Our menu is a carefully curated blend of global cuisines,
                  showcasing the finest ingredients and culinary artistry. Every
                  dish is a masterpiece that tantalizes the taste buds. <br />
                  <br /> But the magic doesn't stop there; we feature live
                  performances and themed events, making every visit a
                  celebration. 
                  <br /><br />Whether you're here for a romantic dinner or a special event,
                  every visit to Star 5 Restaurant is a celebration.
                  We're here to create unforgettable memories, one plate and one
                  act at a time. Join us for a truly unique and unforgettable
                  dining adventure that will stay with you long after you leave
                  our doors.
                </p>
              </div>
              <div className="col-lg-6" >
                <img
                  src={homegirlsImage}
                  alt="Homegirls"
                  className="img-fluid"
                  style={{ height: "540px", width: "600px"}}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutUs;
