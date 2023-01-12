import React from "react";
import logo from "./img/airbnb-logo.png";
import photoGrid from "./img/photo-grid.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="airbnb" />
      </nav>
      <img className="photoGrid" src={photoGrid} alt="grid of photos" />
      <div className="headerText">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </header>
  );
}
