import React from "react";
import "./Footer.css";
import { SiFacebook, SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <div class="contact-container">
        <p>
          <strong> Bookworm Retreat</strong>
        </p>
        <div class="contact-section">
          <h3> Contact Information</h3>
          <p>
            Phone: <a href="tel:(+216)  97 427 288 "> (+216) 97 427 288 </a>{" "}
          </p>
          <p>
            Or <a href=" tel : (+216) 20 121  449 "> (+216) 20 121 449</a>
          </p>

          <p>
            Email: brichnihouyem908@gmail.com
            <br />
            erigeouni4526@gmail.com
          </p>
        </div>

        <div className="follow-us-section">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href=" " target="_blank" rel="noopener">
                <SiFacebook/>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener">
                <SiInstagram/>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel=""></a>
            </li>
          </ul>
        </div>
      </div>
      <h4 className="footer-name">
        2024 Book Searching <br />& Study literature
      </h4>
    </div>
  );
}
export default Footer;
