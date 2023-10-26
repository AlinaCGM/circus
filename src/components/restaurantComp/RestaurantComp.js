import React from "react";
import "./restaurantComp.css";
import ellipse1 from "../../assets/ellipse1.png";
import ellipse2 from "../../assets/ellipse2.png";
import ellipse3 from "../../assets/ellipse3.png";
import ellipse4 from "../../assets/ellipse4.png";

function RestaurantComp() {
  return (
    <section class="restaurant-section">
      <h2 className="restaurant-section-title">RESTAURANT</h2>
      <div className="img-wrapper row ">
        <div className="col-sm-6 col-lg-3 mb-5 ">
          <img
            width="200px"
            src={ellipse1}
            alt="Plate with biff, rosemary and potato"
          ></img>
          <p className=" content-menu  p-4 mt-5">
            Our meat dishes are a culinary masterpiece, meticulously prepared
            with the finest ingredients to ensure an explosion of flavors in
            every bite. Discover a world of succulent meats that will leave your
            taste buds craving for more. At our restaurant, we take pride in
            serving the juiciest and most delectable meat dishes that .
          </p>
        </div>
        <div className="col-sm-6 col-lg-3 mb-5 ">
          <img width="200px" src={ellipse2} alt="Pokebowl"></img>
          <p className=" content-menu  p-4 mt-5">
            For the vegetarian enthusiasts, our veggie dishes are a celebration
            of fresh produce, harmoniously combined with unique seasonings for a
            delightful dining experience. Explore a diverse array of vegetarian
            options that are as vibrant in taste as they are in presentation.
            Whether you're a vegetarian or simply looking for a meatless
            delight.
          </p>
        </div>

        <div className="col-sm-6 col-lg-3  mb-5">
          <img width="200px" src={ellipse3} alt="Cake"></img>
          <p className=" content-menu  p-4 mt-5">
            Save room for our delectable desserts that are the perfect
            conclusion to your meal, offering an unforgettable sweet experience.
            Our desserts are a symphony of flavors and textures, ranging from
            classic favorites to innovative creations. Indulge in a world of
            heavenly desserts that will leave you with a sweet memory of your
            dining experience.
          </p>
        </div>

        <div className="col-sm-6 col-lg-3  mb-5">
          <img width="200px" src={ellipse4} alt="Cocktail"></img>
          <p className=" content-menu  p-4 mt-5">
            Wash down your meal with a refreshing selection of drinks, from
            signature cocktails to classic favorites that will quench your
            thirst. Our bar offers an extensive range of beverages to complement
            your dining experience, featuring a variety of options for all
            preferences. Explore our diverse drink menu, where each sip is a
            delightful journey in itself.
          </p>
        </div>
      </div>
      <Button />
    </section>
  );
}

function Button() {
  return <button type="button">MORE</button>;
}

export default RestaurantComp;
