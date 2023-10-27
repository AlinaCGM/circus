import "./footer.css";
import logo from "../../assets/logo.png";
import at from "../../assets/icon-at.svg";
import phone from "../../assets/icon-phone.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="row">
      <div className="col-sm-10 col-lg-4 mx-auto">
        <p className="footer-heading reset-padding">Visit Us</p>
        <address>
          <p className="reset-padding ">
            Djurgårdsslätten 43-45, 115 21 Stockholm
          </p>
          <p className="reset-padding">
            <a href="tel:#">
              <img src={phone} alt="Phone icon" className="contact-icon" />
              +468 587 987 00
            </a>
          </p>
          <p className="reset-padding">
            <a href="mailto:#">
              <img src={at} alt="At icon" className="contact-icon" />
              info@cirkus.se
            </a>
          </p>
        </address>
      </div>
      <div className="col-sm-10 col-lg-4 mx-sm-auto">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="col-sm-10 col-lg-4 mx-auto">
        <h5>Subscribe to Our Newsletter</h5>
        <form>
          <div class="input-group mb-3 ">
            <input
              type="email"
              class="form-control"
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-3 w-100">
              <h5>Stay Connected</h5>
              <div className="social-media-icons">
                <FaFacebook className="icon mx-3" />
                <FaTwitter className="icon mx-3" />
                <FaInstagram className="icon mx-3" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </footer>
  );
}
