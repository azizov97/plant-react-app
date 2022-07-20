import React, { Component } from "react";
import Button from "../common/button/button";
import subscribeImg from "../../images/subscribe.png";
import "./subscribe.scss";

class Subscribe extends Component {
  render() {
    return (
      <section className="subscribe">
        <div className="subscribe-left">
          <h1>Subscribe Our Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
            tempor, accumsan sit amet nunc cursus.
          </p>
          <form>
            <input type="text" placeholder="Enter mail..." />
            <Button btnLabel="Subscribe" />
          </form>
        </div>
        <div className="subscribe-right">
          <img src={subscribeImg} alt="" />
        </div>
      </section>
    );
  }
}

export default Subscribe;
