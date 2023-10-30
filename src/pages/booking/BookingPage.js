import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BookingComponent from "../../components/booking/BookingComponent";

function BookingPage() {
  return (
    <div>
      <header className="text-center pt-4">
        <h2>Book the tickets</h2>
      </header>
      <BookingComponent />
    </div>
  );
}

export default BookingPage;
