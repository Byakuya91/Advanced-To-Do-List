//? React Imports
import { useEffect, useState } from "react";

//? Custom hooks
import useLocalStorage from "../CustomHooks/useLocalStorage";

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
  const [hue, setHue] = useLocalStorage("react-todo.color", "240");

  // ! if the user has dark preferences setup beforehand.
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "react-todo.theme",
    defaultDark ? "dark" : "light"
  );

  const [isColorPicking, setIsColorPicking] = useState(false);

  //   ? modifying the toggle between light and dark
  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  //   ? modifying the slider
  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside
      className={styles.wrapper}
      style={{
        backgroundColor: isColorPicking
          ? "hsl(var(--muted)/.6)"
          : "transparent",
      }}
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
          <input
            className={styles.picker}
            type="range"
            min="0"
            max="360"
            aria-label="Change color theme slider."
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
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
