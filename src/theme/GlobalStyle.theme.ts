import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #fa22e1;
    --secondary-color: #5251e1;

    font-size: 62.5%;    
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Raleway', sans-serif;

    /* raleway-regular - latin */
    @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: local(''),
        url('fonts/raleway-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('fonts/raleway-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* raleway-700 - latin */
    @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-display: auto;
    font-weight: 700;
    src: local(''),
        url('fonts/raleway-v17-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('fonts/raleway-v17-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* raleway-italic - latin */
    @font-face {
    font-family: 'Raleway';
    font-style: italic;
    font-display: auto;
    font-weight: 400;
    src: local(''),
        url('fonts/raleway-v17-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('fonts/raleway-v17-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* montserrat-300 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: auto;
      font-weight: 300;
      src: url('../fonts/montserrat-v14-latin-300.eot'); /* IE9 Compat Modes */
      src: local('Montserrat Light'), local('Montserrat-Light'),
          url('../fonts/montserrat-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../fonts/montserrat-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
          url('../fonts/montserrat-v14-latin-300.woff') format('woff'), /* Modern Browsers */
          url('../fonts/montserrat-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../fonts/montserrat-v14-latin-300.svg#Montserrat') format('svg'); /* Legacy iOS */
    }

    /* montserrat-regular - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: auto;
      font-weight: 400;
      src: url('../fonts/montserrat-v14-latin-regular.eot'); /* IE9 Compat Modes */
      src: local('Montserrat Regular'), local('Montserrat-Regular'),
          url('../fonts/montserrat-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../fonts/montserrat-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('../fonts/montserrat-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('../fonts/montserrat-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../fonts/montserrat-v14-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
    }

    /* montserrat-700 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: auto;
      font-weight: 700;
      src: url('../fonts/montserrat-v14-latin-700.eot'); /* IE9 Compat Modes */
      src: local('Montserrat Bold'), local('Montserrat-Bold'),
          url('../fonts/montserrat-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../fonts/montserrat-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
          url('../fonts/montserrat-v14-latin-700.woff') format('woff'), /* Modern Browsers */
          url('../fonts/montserrat-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../fonts/montserrat-v14-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
    }

    /* montserrat-900 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: auto;
      font-weight: 900;
      src: url('../fonts/montserrat-v14-latin-900.eot'); /* IE9 Compat Modes */
      src: local('Montserrat Black'), local('Montserrat-Black'),
          url('../fonts/montserrat-v14-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../fonts/montserrat-v14-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
          url('../fonts/montserrat-v14-latin-900.woff') format('woff'), /* Modern Browsers */
          url('../fonts/montserrat-v14-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../fonts/montserrat-v14-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
    }

    
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

  .dark-mode {
    --primary-color:   #faea52;
    --secondary-color: #fc32a1;
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