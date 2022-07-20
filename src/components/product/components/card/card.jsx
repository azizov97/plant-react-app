import React, { Component } from "react";
import productImg1 from "../../../../images/best1.png";
import productImg2 from "../../../../images/best2.png";
import productImg3 from "../../../../images/best3.png";
import productImg4 from "../../../../images/best4.png";
import "./card.scss";

const cards = [
  {
    cardImg: productImg1,
    cardTitle: "Outdoor Plant",
    cardBg: "#EAF2E5",
  },
  {
    cardImg: productImg2,
    cardTitle: "Monsters Plant",
    cardBg: "#F0EBE6",
  },
  {
    cardImg: productImg3,
    cardTitle: "Pottle Plant",
    cardBg: "#E2ECE4",
  },
  {
    cardImg: productImg4,
    cardTitle: "Indoor Plant",
    cardBg: "#E7EEED",
  },
];

class Card extends Component {
  render() {
    return (
      <section className="cards">
        {cards.map((item) => (
          <div style={{ backgroundColor: item.cardBg }} className="card">
            <img src={item.cardImg} alt="" />
            <div className="card-title">
              <h1>{item.cardTitle}</h1>
            </div>
            <div className="stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
            </div>
            <p>$50.00</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Card;
