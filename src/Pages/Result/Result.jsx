import React from "react";
import Card from "../../Components/Card/Card";
import { useGlobalHooke } from "../../hooks/Context";
import "./result.css";
const Result = () => {
  const { recipe,titleChange } = useGlobalHooke();
  titleChange("recipe");
  return Array.isArray(recipe) ? (
    <div className="card-wrapper">
      {recipe.map((element) => {
        const { idMeal, strMeal, strArea, strMealThumb } = element;
        const title =
          strMeal.length < 15 ? strMeal : `${strMeal.slice(0, 15)}...`;
        return (
          <Card
            img={strMealThumb}
            title={title}
            country={strArea}
            link={`/recipe/${idMeal}`}
            key={idMeal}
          />
        );
      })}
    </div>
  ) : (
    <p style={{textAlign:"center",color:"red","fontSize":"3rem"}}>Data Not Found...</p>
  );
};

export default Result;
