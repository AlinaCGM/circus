import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingComponent from "../../components/booking/BookingComponent";
import Footer from "../../components/footer/Footer";
import NavBarHome from "../../components/navbar/NavBarHome";

function BookingPage() {
  return (
    <div >
      <NavBarHome /> 
      <BookingComponent/>
      <Footer />
    </div>
  );
}

export default BookingPage;