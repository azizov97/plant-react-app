import React, { Component } from "react";
import Button from "../common/button/button";
import Card from "./components/card/card";
import "./product.scss";

const items = [
  {
    title: "New Plants",
    link: "/newPlants",
  },
  {
    title: "New Arrivals",
    link: "/newArrivals",
  },
  {
    title: "Sale",
    link: "/sale",
  },
];

class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-title">
          <h1>Our Best Product</h1>
        </div>
        <ul className="product-items">
          {items.map((item) => (
            <li>
              <a href="{item.link}">{item.title} </a>
            </li>
          ))}
        </ul>
        <Card />
        <div className="btn-product">
          <Button btnLabel="View All" />
        </div>
      </div>
    );
  }
}

export default Product;
