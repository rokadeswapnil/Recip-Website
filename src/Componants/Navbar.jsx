import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
    setIsOpen(false); // always close menu
  };

  const activeClass = (path) =>
    location.pathname === path ? "text-yellow-700" : "";

  return (
    <div
      className="container mx-auto mt-6 px-8 py-4 
      flex items-center justify-between 
      rounded shadow-md relative"
    >
      {/* Logo */}
      <h1
        className="text-3xl font-bold cursor-pointer"
        onClick={() => handleClick("/")}
      >
        Reci<span className="text-yellow-700">P</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center font-medium">
        <li
          className={`cursor-pointer hover:text-yellow-700 ${activeClass("/")}`}
          onClick={() => handleClick("/")}
        >
          Menu
        </li>
        <li
          className={`cursor-pointer hover:text-yellow-700 ${activeClass("/about")}`}
          onClick={() => handleClick("/about")}
        >
          About
        </li>
        <li
          className={`cursor-pointer hover:text-yellow-700 ${activeClass("/contact")}`}
          onClick={() => handleClick("/contact")}
        >
          Contact
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className="absolute z-50 top-20 right-8 bg-white shadow-lg 
          rounded-md flex flex-col gap-4 p-4 md:hidden w-40"
        >
          <li
            className="hover:text-yellow-700 cursor-pointer"
            onClick={() => handleClick("/")}
          >
            Menu
          </li>
          <li
            className="hover:text-yellow-700 cursor-pointer"
            onClick={() => handleClick("/about")}
          >
            About
          </li>
          <li
            className="hover:text-yellow-700 cursor-pointer"
            onClick={() => handleClick("/contact")}
          >
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
