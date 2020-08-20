import { getIndexesInRange } from "@src/helpers/utils.helpers";
import { useCarousel } from "@src/hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import tw, { css } from "twin.macro";

type Props = {
  intervalInMs: number;
  imageSrcs: string[];
  displayRange?: number;
};

const imageVariants: Variants = {
  hidden: {},
  visible: {},
};

function ImageCarousel({
  intervalInMs,
  imageSrcs,
  displayRange = 1,
}: Props): ReactElement {
  const { currentIndex } = useCarousel(intervalInMs, imageSrcs.length);

  const displayedIndexes = getIndexesInRange(
    displayRange,
    currentIndex,
    imageSrcs.length
  );

  return (
    <Container>
      {displayedIndexes.map((index) => (
        <Image
          key={imageSrcs[index]}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          //
          alt={imageSrcs[index]}
          src={imageSrcs[index]}
          isFocused={index === currentIndex}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled(motion.div)<ContainerProps>`
  ${tw`flex`}
`;

const slideIn = keyframes`
  from {
    transform: translateX(50%);
  }

  to {
    transform: translateX(0) ;
  }
`;

const focus = keyframes`
  from {
    transform: translateX(50%) scale(1);
    opacity: .5;

  }

  to {
    transform: translateX(0) scale(1.5);
    opacity: 1;
  }
`;

type TextProps = {
  isFocused: boolean;
};
const Image = styled(motion.img)<TextProps>`
  width: 5rem;
  height: 7rem;
  object-fit: cover;
  opacity: 0.7;
  animation: ${slideIn} 400ms ease forwards;

  ${(p) =>
    p.isFocused &&
    css`
      animation-name: ${focus};
      box-shadow: 0 10px 20px #000;

      z-index: 10;
    `};
`;

export { ImageCarousel };
