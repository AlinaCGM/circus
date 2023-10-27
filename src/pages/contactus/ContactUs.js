import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../../components/contactUs/ContactUs";
import Footer from "../../components/footer/Footer";

function ContactUs() {
  return (
    <div >
      <NavBarHome /> 
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default ContactUs;