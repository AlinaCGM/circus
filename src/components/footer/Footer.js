import "./footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="row">
      <div className="col">
        <p className="footer-heading">Visit Us</p>
        <address>
          <p>Djurgårdsslätten 43-45, 115 21 Stockholm</p>
          <p>
            <a href="tel:#">+468 587 987 00</a>
          </p>
          <p>
            <a href="mailto:#">info@cirkus.se</a>
          </p>
        </address>
      </div>
      <div className="col">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="col">
        <p className="footer-heading">Navigation</p>
        <ul className="footer-nav-list">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Shows</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Book</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
