import React, { Component } from "react";
import Button from "../common/button/button";
import aboutImg from "../../images/aboutus.png";
import "./about.scss";

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="about-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-right">
          <h4>About Us</h4>
          <h2>Continue to Develop to Became Global Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan
            sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam.
            Lectus elit, nulla elementum fringilla at.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus.
          </p>
          <div className="btn-about">
            <Button btnLabel="Read More" />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
