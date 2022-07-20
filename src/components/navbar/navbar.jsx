import React, { Component } from "react";
import Button from "../common/button/button";
import "./navbar.scss";

const links = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        <div className="navbar-logo">
          <h1>Plant</h1>
        </div>
        <ul className="navbar-links">
          {links.map((item) => (
            <li>
              <a href="{item.link}">{item.title} </a>
            </li>
          ))}
        </ul>
        <div className="btn-group">
          <Button btnLabel="Login" />
          <Button btnLabel="Sing Up" />
        </div>
      </section>
    );
  }
}

export default Navbar;
