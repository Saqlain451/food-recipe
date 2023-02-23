import React from "react";
import "./recipecard.css";

const RecipeCard = ({
  backBtnclick,
  img,
  title,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
  ingredient7,
  ingredient8,
  ingredient9,
  recipeText,
}) => {
  return (
    <div className="res">
      <div className="res-left">
        <img
          src={img}
          alt="recipe"
          width=""
          height=""
        />
      </div>
      <div className="res-right">
        <h1 className="card-title">{title}</h1>
        <h2 className="sub-title">Ingridients: </h2>
        <div className="box-wrapper">
          <div className="box">{ingredient1}</div>
          <div className="box">{ingredient2}</div>
          <div className="box">{ingredient3}</div>
          <div className="box">{ingredient4}</div>
          <div className="box">{ingredient5}</div>
          <div className="box">{ingredient6}</div>
          <div className="box">{ingredient7}</div>
          <div className="box">{ingredient8}</div>
          <div className="box">{ingredient9}</div>
        </div>
        <p className="recipe-text">
          {recipeText}
        </p>
        <button className="btn-back" onClick={backBtnclick}>
          go back
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
