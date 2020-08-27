import { keyframes } from "styled-components";

export const spinX = keyframes`
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(360deg);
  }
`;
export const spinY = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

export const spinZ = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;
