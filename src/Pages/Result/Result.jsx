import React from "react";
import Card from "../../Components/Card/Card";
import { useGlobalHooke } from "../../hooks/Context";
import Loader from "../../Components/Loader/Loader";
import "./result.css";
import DataNotFound from "../../Components/Data/DataNotFound";
const Result = () => {
  const { recipe, titleChange, loading } = useGlobalHooke();
  titleChange("recipe");
  return loading ? (
    <Loader />
  ) : Array.isArray(recipe) ? (
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
    <DataNotFound/>
  );
};

export default Result;
