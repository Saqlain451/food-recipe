import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGlobalHooke } from "./hooks/Context";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Recipe from "./Pages/Recipe/Recipe";
const App = () => {
  const { isDark } = useGlobalHooke();
  return (
    <BrowserRouter>
      <div className={isDark ? "dark" : ""}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
