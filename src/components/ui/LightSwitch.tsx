import React, { ReactElement } from "react";
import { styled } from "twin.macro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useToggleDarkMode } from "@src/hooks";

const svgVariants: Variants = {
  enter: {
    opacity: 0,
    y: 25,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 20,
    },
  },
  exit: {
    y: 25,
    opacity: 0,
  },
};

type Props = {
  className?: string;
};

/**
 * @description A button wired to ThemeContext
 */
function LightSwitch({ className }: Props): ReactElement {
  const [mode, toggleDarkMode] = useToggleDarkMode();

  /* Shorthands */
  const isDarkMode = mode === "dark-mode";
  const ariaLabel = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  /* HTML */
  const moonSvg = (
    <motion.svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      //
      variants={svgVariants}
      initial="enter"
      animate="visible"
      exit="exit"
      key="moon-svg"
    >
      <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
    </motion.svg>
  );

  const sunSvg = (
    <motion.svg
      variants={svgVariants}
      initial="enter"
      animate="visible"
      exit="exit"
      key="sun-svg"
      //
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1.5em"
      width="1.5em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"></path>
    </motion.svg>
  );

  return (
    <Container
      className={className}
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={toggleDarkMode}
    >
      <AnimatePresence exitBeforeEnter>
        {isDarkMode ? moonSvg : sunSvg}
      </AnimatePresence>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.button<ContainerProps>``;

export { LightSwitch };
