import React, { Component } from "react";
import Button from "../common/button/button";
import Service from "./components/service";
import heroImg from "../../images/hero.png";
import heroImg1 from "../../images/hero1.png";
import heroImg2 from "../../images/hero2.png";
import heroImg3 from "../../images/hero3.png";
import "./hero.scss";

class Hero extends Component {
  services = [
    {
      serviceTitle: "2000+",
      serviceInfo: "Delivery",
    },
    {
      serviceTitle: "1200+",
      serviceInfo: "Customers",
    },
    {
      serviceTitle: "1000+",
      serviceInfo: "Product",
    },
  ];

  render() {
    return (
      <>
        <section className="hero">
          <div className="hero-left">
            <h1>Growing Beautiful Plants at Home</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
            <div className="hero-btn">
              <Button btnLabel="Learn More" />
            </div>
            <div className="services">
              {this.services.map((item) => (
                <Service
                  serviceTitle={item.serviceTitle}
                  serviceInfo={item.serviceInfo}
                />
              ))}
            </div>
          </div>
          <div className="hero-right">
            <img src={heroImg} alt="" />
          </div>
        </section>

        <section className="collection">
          <div className="collection-left">
            <h2>We have lots of plants collection for you and your family</h2>
            <p>See all collection</p>
          </div>
          <div className="collection-right">
            <div className="img-box">
              <img src={heroImg1} alt="" />
              <img src={heroImg2} alt="" />
              <img src={heroImg3} alt="" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Hero;
