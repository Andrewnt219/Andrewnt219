import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

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
  const [displayedTextIndex, setDisplayedTextIndex] = useState(0);
  const { length } = texts;

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (displayedTextIndex < length - 1) {
        setDisplayedTextIndex((prev) => prev + 1);
      } else {
        setDisplayedTextIndex(0);
      }
    }, intervalInMs);

    return () => {
      clearTimeout(timerId);
    };
  }, [length, displayedTextIndex, intervalInMs]);

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        {renderTexts(texts, displayedTextIndex)}
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
  //! inline-block is important
  display: inline-block;
`;

export { TextCarousel };
