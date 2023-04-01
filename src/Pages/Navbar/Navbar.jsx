import React from "react";
import logo from "../../assets/Images/logo-footer.webp";
import "./navbar.css";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useGlobalHooke } from "../../hooks/Context";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { isDark, darkToggle } = useGlobalHooke();
  return (
    <>
      <header className="header">
        <div className="navbar-logo">
          <NavLink to="/home"><img src={logo} alt="logo" width="200" height="96" /></NavLink>  
        </div>
        <div>
          <button className="btn-dark" onClick={darkToggle} aria-label="dark">
            {isDark ? <BsFillSunFill /> : <MdDarkMode />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
