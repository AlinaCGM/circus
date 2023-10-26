import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Restaurant from "./pages/restaurant/Restaurant";
import Footer from "./components/footer/Footer";
import NavBarHome from "./components/navbar/NavBarHome";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
