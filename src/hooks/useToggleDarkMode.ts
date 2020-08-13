import { ThemeContext } from "@src/contexts/theme.context";
import { useCallback, useContext } from "react";
import { Mode } from "@src/contexts/theme.context";

export const useToggleDarkMode = (): [Mode, () => void] => {
  const { onModeSwitch, mode } = useContext(ThemeContext);

  /* Handle theme switch */
  const toggleDarkMode = useCallback(() => {
    mode === "dark-mode"
      ? onModeSwitch("light-mode")
      : onModeSwitch("dark-mode");
  }, [mode, onModeSwitch]);

  return [mode, toggleDarkMode];
};
