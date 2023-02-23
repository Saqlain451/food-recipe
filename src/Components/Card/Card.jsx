import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";

const Card = ({ img, title, country,link }) => {
  return (
    <div className="card">
      <img src={img} alt="img" className="card-img" width="300" height="300"/>
      <h1 className="card-title">{title}</h1>
      <div className="card-buttons">
        <div className="btn-country">{country}</div>
        <div className="btn-recipe"> <NavLink to={link}>Show Recipe</NavLink></div>
      </div>
    </div>
  );
};

export default Card;
