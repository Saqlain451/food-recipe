import React, { useState, useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalHooke } from "../../hooks/Context";
import "./recipe.css";
import Loader from "../../Components/Loader/Loader";
const Recipe = () => {
  const { titleChange } = useGlobalHooke();
  const { id } = useParams();
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({
    img: "",
    title: "",
    ingridient1: "",
    ingridient2: "",
    ingridient3: "",
    ingridient4: "",
    ingridient5: "",
    ingridient6: "",
    ingridient7: "",
    ingridient8: "",
    ingridient9: "",
    text: "",
  });

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?`;

  const getData = async (api) => {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data.meals);
    const meals = data.meals;
    data ? setIsLoading(false) : setIsLoading(true);
    setData({
      img: meals[0].strMealThumb,
      title: meals[0].strMeal,
      ingridient1: meals[0].strIngredient1,
      ingridient2: meals[0].strIngredient2,
      ingridient3: meals[0].strIngredient3,
      ingridient4: meals[0].strIngredient4,
      ingridient5: meals[0].strIngredient5,
      ingridient6: meals[0].strIngredient6,
      ingridient7: meals[0].strIngredient7,
      ingridient8: meals[0].strIngredient8,
      ingridient9: meals[0].strIngredient9,
      text: meals[0].strInstructions,
    });
  };

  titleChange(data.title + " Recipe");

  useEffect(() => {
    getData(`${url}i=${id}`);
  }, [id]);

  return isLoading ? (
    <div className="res-loader">
    <Loader/>
    </div>
  ) : (
    <section>
      <RecipeCard
        img={data.img}
        title={data.title}
        ingredient1={data.ingridient1}
        ingredient2={data.ingridient2}
        ingredient3={data.ingridient3}
        ingredient4={data.ingridient4}
        ingredient5={data.ingridient5}
        ingredient6={data.ingridient6}
        ingredient7={data.ingridient7}
        ingredient8={data.ingridient8}
        ingredient9={data.ingridient9}
        recipeText={data.text}
        backBtnclick={() => {
          Navigate(-1);
        }}
      />
    </section>
  );
};

export default Recipe;
