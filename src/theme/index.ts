import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  primary: "#fa22e1",
  secondary: "#5251e1",
  breakpoints: {
    xxs: "320px",
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1600px",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  primary: "#faea52",
  secondary: "#fc32a1",
};
