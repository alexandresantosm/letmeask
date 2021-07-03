import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toogleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const storagedTheme = localStorage.getItem("theme");

    return (storagedTheme ?? "light") as Theme;
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  let myHtml = document.querySelector("html");

  if (myHtml && currentTheme === "dark") {
    myHtml.style.cssText += "filter: invert(1) hue-rotate(180deg);";
  }

  if (myHtml && currentTheme === "light") {
    if (myHtml) {
      myHtml.style.cssText = "";
    }
  }

  function toogleTheme() {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
