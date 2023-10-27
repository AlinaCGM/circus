import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import BookingPage from "./pages/booking/BookingPage";
import Footer from "./components/footer/Footer";
import NavBarHome from "./components/navbar/NavBarHome";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactPage from "./pages/contactus/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
