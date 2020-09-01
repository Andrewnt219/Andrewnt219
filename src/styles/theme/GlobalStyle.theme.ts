import { theme } from "twin.macro";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --accent-color: #0070f3;
  --accent-color-rgb: 0, 112, 243;

  --primary-color: #fff;
  --primary-color-rgb:   255, 255, 255;


  --primary-color-light: #F6F8FE;
  --primary-color-light-rgb: 246, 248, 254;

  --secondary-color: #751bba;
  --secondary-color-rgb: 117, 27, 186;

  --text-color: #000;
  --text-color-rgb: 0, 0, 0;

  --text-color-light: #757678;
  --text-color-light-rgb: 117, 118, 120;


  font-size: 62.5%;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;

  scroll-behavior: smooth;

  /* SECTION Raleway */
  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/raleway-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/raleway-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* raleway-700 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/raleway-v17-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/raleway-v17-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* raleway-italic - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/raleway-v17-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/raleway-v17-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* !SECTION */

  /* SECTION Montserrat */
  /* montserrat-300 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url('/fonts/montserrat-v14-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/montserrat-v14-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('/fonts/montserrat-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/montserrat-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('/fonts/montserrat-v14-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/montserrat-v14-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* montserrat-900 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Montserrat Black'), local('Montserrat-Black'),
        url('/fonts/montserrat-v14-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/montserrat-v14-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* !SECTION */
  
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
    font-size: 135%;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xl3}) {
    font-size: 160%;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.wqhd}) {
    font-size: 215%;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.uhd}) {
    font-size: 320%;
  }
}

body {
  color: var(--text-color);
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

/* NOTE theme must end with 'mode' for ease of removing */
.dark-mode {
  --accent-color: #51d7fd;
  --acent-color-rgb: 81, 215, 253;

  --primary-color: #150d1c;
  --primary-color-rgb: 21, 13, 28;

  --primary-color-light: #0f0717;
  --primary-color-light-rgb: 15, 7, 23;

  --secondary-color: #6a2cb1;
  --secondary-color-rgb: 106, 44, 177;

  --text-color: #fff;
  --text-color-rgb: 255, 255, 255;

  --text-color-light: #9a9fac;
  --text-color-light-rgb: 154, 159, 172;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;

  box-sizing: inherit;
  font-family: inherit;
  color: var(--text-color);
  transition: fill 300ms ${theme`transitionTimingFunction.theme`},  
    color 300ms ease, 
    background-color ${theme`transitionDuration.theme`} ${theme`transitionTimingFunction.theme`};
}

input,
select,
textarea {
  font-size: inherit;
  font-family: inherit;
  background: transparent;
}

#__next {
  background: var(--primary-color);
  transition: all 1000ms ease;
  position: relative;

}

.no-scroll {
  overflow-y: hidden;
}

/* * { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); }
* * * { background-color: rgba(0,0,255,.2); }
* * * * { background-color: rgba(255,0,255,.2); }
* * * * * { background-color: rgba(0,255,255,.2); }
* * * * * * { background-color: rgba(255,255,0,.2); }
* * * * * * * { background-color: rgba(255,0,0,.2); }
* * * * * * * * { background-color: rgba(0,255,0,.2); }
* * * * * * * * * { background-color: rgba(0,0,255,.2); } */

`;
