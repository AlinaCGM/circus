import React from "react";
import Hero from "../../components/hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "../../components/contactUs/ContactUs";
import Footer from "../../components/footer/Footer";

function ContactUs() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <NavBarHome /> 
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default ContactUs;