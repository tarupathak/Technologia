import React from "react";
import "./Components.css";
import { cardItems } from "./CardItems";

const Card = () => {
  return (
    <>
      {cardItems &&
        cardItems.map((value, index) => {
          return (
            <div id="card-box">
              <div id="card-img">
                <img src={value.pic} alt="picture" />
              </div>
              <div id="card-txt">{value.heading}</div>
              <div id="card-foot">Learn more</div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
