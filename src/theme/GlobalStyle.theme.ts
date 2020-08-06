import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: ${(p) => p.theme.primary};
    --secondary-color: ${(p) => p.theme.secondary};

    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
    
    @media screen and (min-width: ${(p) => p.theme.breakpoints.xxs}) {
      font-size: 75%; /* 16px => 12px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
      font-size: 81.25%; /* 16px => 13px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
      font-size: 87.5%; /* 16px => 14px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
      font-size: 93.75%; /* 16px => 15px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
      font-size: 100%; /* 16px => 16px */
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.xxl}) {
      font-size: 106.25%; /* 16px => 17px */
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }


  p {
    
    line-height: 1.6;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
    list-style: none;

    font-family: inherit;
  }

  input,
  select,
  textarea {
    font-size: inherit;
    font-family: inherit;
    background: transparent;
  }

  #__next {
    min-height: 100vh;
    position: relative;
  }

`;
