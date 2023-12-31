import React from "react";

import "./restaurantComp.css";
import ellipse1 from "../../assets/ellipse1.png";
import ellipse2 from "../../assets/ellipse2.png";
import ellipse3 from "../../assets/ellipse3.png";
import ellipse4 from "../../assets/ellipse4.png";

function Card({ src, alt, title, description }) {
  return (
    <a href="/restaurant">
      <article id="card">
        <img src={src} alt={alt}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </a>
  );
}

function RestaurantComp() {
  return (
    <section className="restaurant-section">
      <h2>What you'll find on our menu</h2>
      <div className="row-card-wrapper ">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <Card
              src={ellipse1}
              alt="Plate with beff, rosemary and potato"
              title="À la carte"
              description="Enjoy our à la carte with various dishes ."
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Card
              src={ellipse2}
              alt="Pokebowl"
              title="Raw food"
              description="Choose between a variety of our raw 'cooked' dishes."
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Card
              src={ellipse3}
              alt="Cake"
              title="Dessert"
              description="You must try out some of our delicious cakes."
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Card
              src={ellipse4}
              alt="Cocktail"
              title="Cocktails"
              description="Sit down in our bar and enjoy a well-made cocktail or mocktail."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantComp;
