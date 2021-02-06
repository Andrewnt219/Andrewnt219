import { createGlobalStyle } from 'styled-components';
import { darkPrismStyles, lightPrismStyle } from './_prismStyles';
import { typographyStyles } from './_typographyStyles';

export default createGlobalStyle`
  ${typographyStyles}
    
  ${lightPrismStyle}

  html.dark {
    ${darkPrismStyles}
  }
`;
