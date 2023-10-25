import React from "react";
import "./restaurantComp.css";
import ellipse1 from "../../assets/ellipse1.png";
import ellipse2 from "../../assets/ellipse2.png";
import ellipse3 from "../../assets/ellipse3.png";
import ellipse4 from "../../assets/ellipse4.png";

function RestaurantComp() {
  return (
    <section class="restaurant-section">
      <h2>RESTAURANT</h2>
      <div class="img-wrapper">
        <img src={ellipse1} alt="Plate with beff, rosemary and potato"></img>
        <img src={ellipse2} alt="Pokebowl"></img>
        <img src={ellipse3} alt="Cake"></img>
        <img src={ellipse4} alt="Cocktail"></img>
      </div>
      <Button />
    </section>
  );
}

function Button() {
  return <button type="button">MORE</button>;
}

export default RestaurantComp;
