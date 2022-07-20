import React, { Component } from "react";
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product/product";
import Customers from "./components/customers/customers";
import Subscribe from "./components/subscribe/subscribe";
import Instagram from "./components/instagram/instagram";
import Footer from "./components/footer/footer";
import "./base.scss";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Product />
        <Customers />
        <Subscribe />
        <Instagram />
        <Footer />
      </>
    );
  }
}

export default App;
