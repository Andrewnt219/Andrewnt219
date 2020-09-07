import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { StackInfo as StackInfoProps } from "@src/data/homepageProjects.data";
import { useClickOutside } from "@src/hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useContext, useRef, useState } from "react";
import tw, { css, styled } from "twin.macro";

type Props = {
  data: StackInfoProps;
  className?: string;
};

function StackInfo({ data, className }: Props): ReactElement {
  const { imageSource, name } = data;

  /* Styling bases on light/dark */
  const { mode } = useContext(ColorThemeContext);
  const isDarkMode = mode === "dark-mode";

  /* Expand/Collapse */
  const [isExpanded, setIsExpanded] = useState(false);

  /* Container handlers */
  // expands/collapse on click
  const onClick = () => {
    setIsExpanded((prev) => !prev);
  };

  // collapse on blur
  const onBlur = () => {
    setIsExpanded(false);
  };

  /* collapse on click outside */
  const containerRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside(containerRef, () => setIsExpanded(false));

  return (
    <Container
      // styling
      className={className}
      isActive={isExpanded}
      // handlers
      ref={containerRef}
      onClick={onClick}
      onBlur={onBlur}
    >
      <StackIcon
        src={imageSource}
        alt={name}
        isDarkMode={isDarkMode}
        title={name}
      />

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
  ${tw`flex justify-center items-center h-full p-2 space-x-2 cursor-pointer`}
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
const StackName = styled(motion.span)<StackNameProps>``;

type StackIconProps = {
  isDarkMode: boolean;
};
const StackIcon = styled.img<StackIconProps>`
  width: 2em;

  ${(p) => p.isDarkMode && css``}
`;

export { StackInfo };
