import "./footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="row">
      <div className="col">
        <p className="footer-heading reset-padding">Visit Us</p>
        <address>
          <p className="reset-padding">
            Djurgårdsslätten 43-45, 115 21 Stockholm
          </p>
          <p className="reset-padding">
            <a href="tel:#">+468 587 987 00</a>
          </p>
          <p className="reset-padding">
            <a href="mailto:#">info@cirkus.se</a>
          </p>
        </address>
      </div>
      <div className="col">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="col">
        <p className="footer-heading reset-padding">Navigation</p>
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
