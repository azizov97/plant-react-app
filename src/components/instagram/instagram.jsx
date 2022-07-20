import React, { Component } from "react";
import instaImg1 from "../../images/instagram1.png";
import instaImg2 from "../../images/instagram2.png";
import instaImg3 from "../../images/instagram3.png";
import instaImg4 from "../../images/instagram4.png";
import instaImg5 from "../../images/instagram5.png";
import "./instagram.scss";

const instaImgs = [
  {
    instaImg: instaImg1,
  },
  {
    instaImg: instaImg2,
  },
  {
    instaImg: instaImg3,
  },
  {
    instaImg: instaImg4,
  },
  {
    instaImg: instaImg5,
  },
];

class Instagram extends Component {
  render() {
    return (
      <section className="instagram">
        <div className="instagram-title">
          <h1>Follow Us on Instagram</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accu msan sit amet nunc cursus. Nec tristique at in erat lectus
          </p>
        </div>
        <div className="instagram-images">
          {instaImgs.map((img) => (
            <img src={img.instaImg} alt="" />
          ))}
        </div>
      </section>
    );
  }
}

export default Instagram;
