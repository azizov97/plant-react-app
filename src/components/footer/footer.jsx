import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-media">
          <h1>Plant</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh
            posuere duis eu non sit integer at placerat amet.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <h1>Navigation</h1>
            <ul>
              <li>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Help & Support</a>
                <a href="#">Product</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <h1>About Us</h1>
            <ul>
              <li>
                <a href="#">Contact</a>
                <a href="#">Address</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <h1>Help</h1>
            <ul>
              <li>
                <a href="#">Coustomers Services</a>
                <a href="#">Coustomers Services</a>
                <a href="#">We Are Hiring</a>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
