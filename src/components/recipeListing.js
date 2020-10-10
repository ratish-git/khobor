import React from "react";
import "./recipeListing.css";

const Recipe = (props) => {
  const listing = ({ foodData }) => {
    if (foodData) {
      return foodData.map((item) => {
        return (
          <div className="panel-group">
            <div className="panel panel-default">
              <div className="panel-heading">
                <center>
                  <h4 className="panel-title">
                    <p className="text-success">Source: {item.author}</p>
                    <br />
                    <p className="text-info">{item.title}</p>
                    <br />
                    <br />
                    <img src={item.urlToImage} className="image" alt="" />
                  </h4>
                  <br />
                  <a href={item.url}>Details </a>
                </center>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <br />
      {listing(props)}
    </div>
  );
};

export default Recipe;
