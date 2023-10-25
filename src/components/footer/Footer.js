import "./footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div class="col">
        <p class="footer-heading">Visit Us</p>
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
      <div class="col">
        <img class="logo" src={logo} alt="Logo" />
      </div>
      <div class="col">
        <p class="footer-heading">Navigation</p>
        <ul class="footer-nav-list">
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
