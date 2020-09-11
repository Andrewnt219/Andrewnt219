import { StackInfo as StackInfoProps } from "@src/data/homepageProjects.data";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useContext, useState } from "react";
import tw, { css, styled } from "twin.macro";

type Props = {
  data: StackInfoProps;
  className?: string;
};

function StackInfo({ data, className }: Props): ReactElement {
  const { imageSource, name } = data;

  /* ANCHOR Expand/Collapse */
  const [isExpanded, setIsExpanded] = useState(false);

  /* ANCHOR Container handlers */
  // expand on focus
  const onFocus = () => {
    setIsExpanded(true);
  };

  // collapse on blur
  const onBlur = () => {
    setIsExpanded(false);
  };

  return (
    <Container
      // styling
      className={className}
      isActive={isExpanded}
      // handlers
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <StackIcon src={imageSource} alt={name} title={name} />

      {/* NOTE Removing AnimatePresence makes "miss-clicking" other stack icons  */}
      <AnimatePresence>
        {isExpanded && (
          <StackName
            variants={stackNameVairants}
            initial="hidden"
            exit="exit"
            animate="visible"
          >
            {name}
          </StackName>
        )}
      </AnimatePresence>
    </Container>
  );
}

const stackNameVairants: Variants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left",
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

type ContainerProps = {
  isActive: boolean;
};
const Container = styled.button<ContainerProps>`
  ${tw`flex justify-center items-center h-full p-2 space-x-2 cursor-pointer rounded`}
  transition: background-color 200ms ease;
  filter: saturate(300%);

  :hover,
  :focus {
    outline: none;
    background-color: var(--primary-color-light);
  }

  ${(p) =>
    p.isActive &&
    css`
      background-color: var(--primary-color-light);
    `};
`;

type StackNameProps = {};
const StackName = styled(motion.span)<StackNameProps>`
  /* NOTE 1em font-size will cause a small jump on active */
  font-size: 0.9em;
`;

type StackIconProps = {};
const StackIcon = styled.img<StackIconProps>`
  width: 2em;
`;

export { StackInfo };
