import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";

import { Logo } from "../ui/Logo";
import { useMediaQuery } from "@src/hooks";

import { spinZ } from "@src/styles/animation/spin.animation";
import { GlobalStyling } from "@src/constants/global.constants";

import { generateStackIconPaths } from "@src/data/homepageProjects.data";
import { keyframes } from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";

/**
 * @description renders page's footer
 */
function Footer(): ReactElement {
  const enableAnimation = useMediaQuery("xl");

  /* ANCHOR switch icon on click */
  const [isReactIcon, setIsReactIcon] = useState<boolean>(true);
  const [nextJsIcon, reactJsIcon] = generateStackIconPaths([
    "next.js",
    "react.js",
  ]);

  const iconClickHandler = () => {
    setIsReactIcon((prev) => !prev);
  };

  return (
    <Container height={GlobalStyling.FooterHeight}>
      <Logo size="20rem" animated={enableAnimation} />

      <Text onClick={iconClickHandler} isReactIcon={isReactIcon}>
        Made by Andrew Nguyen with&nbsp;
        <AnimatePresence exitBeforeEnter>
          {isReactIcon ? (
            <ReactJsIcon
              src={reactJsIcon.imageSource}
              alt={reactJsIcon.name}
              //
              key={reactJsIcon.name}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          ) : (
            <NextJsIcon
              src={nextJsIcon.imageSource}
              alt={nextJsIcon.name}
              //
              key={nextJsIcon.name}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </Text>
    </Container>
  );
}

const iconVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

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

type TextProps = {
  isReactIcon: boolean;
};
const Text = styled.p<TextProps>`
  ${tw`flex justify-center items-center cursor-pointer`}

  img {
    height: 1.75em;
  }
`;

const NextJsIcon = styled(motion.img)`
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const ReactJsIcon = styled(motion.img)`
  animation: ${spinZ} 10s linear infinite;
`;

export { Footer };
