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
  const isLargeScreen = useMediaQuery();

  return (
    <Container
      height={
        isLargeScreen
          ? GlobalStyling.DesktopFooterHeight
          : GlobalStyling.MobileFooterHeight
      }
    >
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
  ${tw`bg-lprimary text-xl sticky bottom-0 left-0 w-full duration-theme ease-theme py-5`};
  height: ${(p) => p.height};
  transition-property: background-color;

  display: flex;
  align-items: center;
  justify-items: center;
`;

type TextProps = {};
const Text = styled.p<TextProps>`
  ${tw`flex justify-center items-center `}
  align-self: flex-end;

  svg {
    font-size: larger;
    fill: var(--accent-color);
    animation: ${spinZ} 10s linear infinite;
  }
`;

export { Footer };
