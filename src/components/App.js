import React from "react";
import NewsItem from "../containers/NewsItem";

let App = () => (
  <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">Khobor</a>
        </div>
      </div>
    </nav>
    <NewsItem />
  </div>
);
export default App;
