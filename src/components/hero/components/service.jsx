import React, { Component } from "react";
import "./service.scss";

class Service extends Component {
  render() {
    const { serviceTitle, serviceInfo } = this.props;
    return (
      <div className="service">
        <div className="service-title">
          <h2>{serviceTitle}</h2>
          <span>{serviceInfo}</span>
        </div>
      </div>
    );
  }
}

export default Service;
