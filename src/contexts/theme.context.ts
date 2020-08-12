import React from "react";

export type Mode = "light-mode" | "dark-mode" | null;

type Themer = {
  mode: Mode;
  onModeSwitch: (newMode: Mode) => void;
};

/**
 * @description context for theming, with current theme and switch handler
 */
export const ThemeContext = React.createContext<Themer>({
  mode: null,
  onModeSwitch: () => {
    return;
  },
});
