
import React, { useEffect } from "react";
import "./Header.css";
import logoImage from "../../assets/images/FoodableLogo.png";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll(".nav_links li a");
    links.forEach((link) => {
      if (link.getAttribute("href") === location.pathname) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [location]);

  return (
    <header>
      <img className="logo" src={logoImage} alt="" />
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;