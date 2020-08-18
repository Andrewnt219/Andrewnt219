import { keyframes } from "styled-components";

export const glow = keyframes`
  0% {
    color: var(--accent-color);
    filter: blur(2px);
  }

   10%{
    color: #fff;
    filter: blur(0);

  }

`;
