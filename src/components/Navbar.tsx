import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white dark:bg-dark text-dark dark:text-white">
      <div className="text-xl font-bold">JP Visual & Docs</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-neutral dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

// แล้วเรียกใช้ใน Navbar component:
{/* <ThemeToggle /> */} // ใส่ตรงที่คุณต้องการแสดงปุ่ม
