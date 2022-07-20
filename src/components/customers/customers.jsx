import React, { Component } from "react";
import avatar from "../../images/avatar.png";
import customersImg from "../../images/customers.png";
import "./customers.scss";

class Customers extends Component {
  render() {
    return (
      <section className="customers">
        <div className="customer-left">
          <h1>What Our Customers Says</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </p>
          <div className="islam-container">
            <div className="islam-title">
              <img src={avatar} alt="" />
              <div className="islam-info">
                <h2>Hasanul Islam</h2>
                <p>Marketing CEO</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
          </div>
        </div>
        <div className="customer-right">
          <img src={customersImg} alt="" />
        </div>
      </section>
    );
  }
}

export default Customers;
