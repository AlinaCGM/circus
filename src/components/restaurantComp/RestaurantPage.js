import React from "react";

import meatDish from "../../assets/meat.jpg";
import salad from "../../assets/salad.jpg";
import dessert from "../../assets/dessert.jpg";
import drinks from "../../assets/drink.jpg";
import "./restaurantComp.css";

function RestaurantPage() {
  return (
    <div className="restaurant-page-container pt-5 pb-5">
      <h2 className="pt-5 title-menu">Restaurant Menu</h2>
      <div className="row ">
        <div className="col-6  col-item ">
          <img className="image-restaurantPage" src={meatDish} alt="" />
        </div>
        <div className="col-6 col-item d-flex justify-content-center align-items-center">
          <ul>
            <li>
              <span className="text-left">Steak</span>
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Burger{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Chicken{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Pork Chop{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6 col-item d-flex justify-content-center align-items-center">
          <ul>
            <li>
              Salad{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Pasta{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Veggie Burger{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Tofu Stir-fry{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6 col-item">
          <img className="image-restaurantPage" src={salad} alt="" />
        </div>
        <div className="col-6 col-item">
          <img className="image-restaurantPage" src={dessert} alt="" />
        </div>
        <div className="col-6 col-item d-flex justify-content-center align-items-center">
          <ul>
            <li>
              Chocolate Cake{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Ice Cream{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Cheesecake{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Fruit Salad{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
          </ul>
        </div>{" "}
        <div className="col-6 col-item d-flex justify-content-center align-items-center">
          <ul>
            <li>
              Soda{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Coffee{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Iced Tea{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
            <li>
              Smoothie{" "}
              <span className="btn-menu" variant="light">
                Order
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6 col-item">
          <img className="image-restaurantPage" src={drinks} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
