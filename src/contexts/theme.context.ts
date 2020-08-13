import React from "react";

export type Mode = "light-mode" | "dark-mode" | null;
export type ModeSwitchHandler = (newMode: Mode) => void;

type Themer = {
  mode: Mode;
  onModeSwitch: ModeSwitchHandler;
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
