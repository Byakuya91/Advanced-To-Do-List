//? React Imports
import { useState } from "react";

// ? Style imports
import styles from "./ThemeSwitcher.module.css";

// ? Library styles
import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

// TODO:
//* 1) get bollerplate JSX setup(ONGOING)
// * 2) get the light and dark theme toggle and theme switcher setup as well.

const ThemeSwitcher = () => {
  //  State variables
  const [isColorPicking, setIsColorPicking] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <aside
      className={styles.wrapper}
      //  style={}
    >
      {isColorPicking ? (
        <>
          <button
            className={`btn ${styles.close}`}
            aria-label="Close color picking mode."
            onClick={() => setIsColorPicking(false)}
          >
            <XMarkIcon />
          </button>
          <input type="range" />
        </>
      ) : (
        <div className={styles.btns}>
          <button
            className="btn"
            aria-label={`Change theme to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            role="switch"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="btn"
            aria-label="Enable color picking mode."
            onClick={() => setIsColorPicking(true)}
          >
            <SwatchIcon />
          </button>
        </div>
      )}
    </aside>
  );
};

export default ThemeSwitcher;
