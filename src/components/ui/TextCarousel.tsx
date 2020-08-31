import { useCarousel } from "@src/hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import { styled } from "twin.macro";

const textVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,

    transition: {
      duration: 0.25,
    },
  },
  exit: {
    scale: 0,
  },
};

type Props = {
  texts: string[];
  intervalInMs: number;
};

function TextCarousel({ texts, intervalInMs }: Props): ReactElement {
  const { length } = texts;
  const { currentIndex } = useCarousel(intervalInMs, length);

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        {renderTexts(texts, currentIndex)}
      </AnimatePresence>
    </Container>
  );
}

function renderTexts(
  texts: Props["texts"],
  displayedTextIndex: number
): (null | ReactElement)[] {
  return texts.map((text, index) =>
    index === displayedTextIndex ? (
      <Text
        key={text}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {texts[displayedTextIndex]}
      </Text>
    ) : null
  );
}

type ContainerProps = {};
const Container = styled(motion.p)<ContainerProps>``;

type TextProps = {};
const Text = styled(motion.span)<TextProps>`
  /* NOTE inline-block is IMPORTANT */
  display: inline-block;
`;

export { TextCarousel };
