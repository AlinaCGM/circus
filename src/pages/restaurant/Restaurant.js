import React from "react";
import NavBarHome from "../../components/navbar/NavBarHome";
import RestaurantPage from "../../components/restaurantComp/RestaurantPage";
import "./restaurant.css";

function Restaurant() {
  return (
    <div className="rest-container">
      <NavBarHome />

      <RestaurantPage />
    </div>
  );
}

export default Restaurant;
