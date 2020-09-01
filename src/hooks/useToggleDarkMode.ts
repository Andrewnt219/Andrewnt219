import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { useCallback, useContext } from "react";
import { Mode } from "@src/contexts/ColorTheme.context";

export const useToggleDarkMode = (): [Mode, () => void] => {
  const { onModeSwitch, mode } = useContext(ColorThemeContext);

  /* Handle theme switch */
  const toggleDarkMode = useCallback(() => {
    mode === "dark-mode"
      ? onModeSwitch("light-mode")
      : onModeSwitch("dark-mode");
  }, [mode, onModeSwitch]);

  return [mode, toggleDarkMode];
};
