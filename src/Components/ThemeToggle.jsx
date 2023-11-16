import React, { useContext } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='p-2'>
      {theme === "dark" ? (
        <div
          className='flex items-center cursor-pointer duration-300'
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiOutlineSun className='text-primary text-2xl mr-2' /> Light Mode
        </div>
      ) : (
        <div
          className='flex items-center cursor-pointer duration-5300 '
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiOutlineMoon className='text-primary text-2xl mr-2' /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
