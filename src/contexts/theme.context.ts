import React from "react";

export type Mode = "light-mode" | "dark-mode" | null;

type Themer = {
  mode: Mode;
  onModeSwitch: (newMode: Mode) => void;
};

export const ThemeContext = React.createContext<Themer>({
  mode: null,
  onModeSwitch: () => {
    return;
  },
});
