import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const { theme, toogleTheme } = useContext(ThemeContext);

  return {
    theme,
    toogleTheme,
  };
}
