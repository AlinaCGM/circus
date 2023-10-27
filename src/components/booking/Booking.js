import React from "react";
import "./booking.css";

function Booking({ closePopup }) {
  return (
    <div className="booking-container">
      <button onClick={closePopup}>Close</button>
      <ul>
        <li>
          November 5, 2023 - "Circus Spectacular" - <span>Book</span>
        </li>
        <li>
          November 12, 2023 - "Amazing Acrobatics Circus" - <span>Book</span>
        </li>
        <li>
          November 19, 2023 - "Circus Extravaganza" - <span>Book</span>
        </li>
        <li>
          November 26, 2023 - "Big Top Circus Adventure" - <span>Book</span>
        </li>
      </ul>
    </div>
  );
}

export default Booking;
