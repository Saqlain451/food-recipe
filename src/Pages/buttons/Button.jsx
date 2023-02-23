import React from "react";
import { useGlobalHooke } from "../../hooks/Context";
import "./buttons.css"
const Button = () => {
    const {btnClick} = useGlobalHooke();
  return (
    <div className="search-btns">
      <div className="btn btn-chicken" onClick={btnClick} >chicken</div>
      <div className="btn btn-fish" onClick={btnClick} >fish</div>
      <div className="btn btn-cake" onClick={btnClick} >cake</div>
    </div>
  );
};

export default Button;
