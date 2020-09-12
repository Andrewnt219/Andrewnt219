import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

import { Logo } from "../ui/Logo";
import { useMediaQuery } from "@src/hooks";

import { spinZ } from "@src/styles/animation/spin.animation";
import { GlobalStyling } from "@src/constants/global.constants";

import { FaReact } from "react-icons/fa";

/**
 * @description renders page's footer
 */
function Footer(): ReactElement {
  const enableAnimation = useMediaQuery("xl");

  return (
    <Container height={GlobalStyling.FooterHeight}>
      <Logo size="20rem" animated={enableAnimation} />

      <Text>
        Made by Andrew Nguyen with&nbsp;
        <FaReact aria-label="react.js" role="img" />
      </Text>
    </Container>
  );
}

type ContainerProps = {
  height: string;
};
const Container = styled.footer<ContainerProps>`
  ${tw`bg-lprimary text-xl sticky bottom-0 left-0 w-full py-5`};
  height: ${(p) => p.height};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

type TextProps = {};
const Text = styled.p<TextProps>`
  ${tw`flex justify-center items-center `}

  svg {
    font-size: larger;
    fill: var(--accent-color);
    animation: ${spinZ} 10s linear infinite;
  }
`;

export { Footer };
