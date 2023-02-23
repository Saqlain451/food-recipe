import React, { useContext, useState, useEffect } from "react";

// create useContext
const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const darkToggle = () => {
    isDark ? setIsDark(false) : setIsDark(true);
  };


  const titleChange = (str)=>{
      return document.title=str;
  }

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?";
  const [recipe, setRecipe] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState(" ");
  const [recipeData, setRecipeData] = useState();
  const changeHandler = (e) => {
    setSearchRecipe(e.target.value);
  };

  const clickHandler = () => {
    setRecipeData(searchRecipe);
  };

  const getAPidata = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      // console.log("🚀 ~ file: Context.jsx:17 ~ getAPidata ~ data:", data.meals);
      setRecipe(data.meals);
    } catch (error) {
      setRecipe("Data not found");
    }
  };

  const btnClick = (e) => {
    const text = e.target.innerText;
    getAPidata(`${url}s=${text}`);
    setSearchRecipe(text);
  };

  useEffect(() => {
    getAPidata(`${url}s=${searchRecipe}`);
  }, [recipeData]);

  return (
    <appContext.Provider
      value={{
        isDark,
        darkToggle,
        recipe,
        changeHandler,
        clickHandler,
        btnClick,
        searchRecipe,
        titleChange
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalHooke = () => useContext(appContext);
export { useGlobalHooke, AppProvider };
