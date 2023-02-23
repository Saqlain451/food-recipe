import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGlobalHooke } from "./hooks/Context";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Recipe from "./Pages/Recipe/Recipe";
const App = () => {
  const { isDark } = useGlobalHooke();
  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
