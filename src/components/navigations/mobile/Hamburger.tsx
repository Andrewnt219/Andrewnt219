import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const textVariants: Variants = {
  visible: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.3,
    },
  },
};

type Props = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * @description A hamburger menu that toggles opening/closing menu and locked screen scroll
 */
function Hamburger({ setIsOpened, isOpened }: Props): ReactElement {
  /* Locking screen */
  useEffect(() => {
    const body = document.body;
    const html = document.querySelector("html");
    if (isOpened) {
      body.classList.add("no-scroll");
      html?.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
      html?.classList.remove("no-scroll");
    }
  }, [isOpened]);

  const onBurgerClicked = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setIsOpened((prev) => !prev);
  };

  return (
    <Container>
      <Backdrop isFullScreen={isOpened} />

      <MenuContainer
        href="#menu"
        isOpened={isOpened}
        onClick={onBurgerClicked}
        // accessibility
        aria-label="Open the menu"
        aria-expanded={isOpened}
        role="button"
        tabIndex={0}
      >
        <AnimatePresence exitBeforeEnter>
          {isOpened ? (
            <IconText
              // framer-motion
              key="menu-close"
              variants={textVariants}
              initial="enter"
              animate="visible"
              exit="exit"
            >
              Close
            </IconText>
          ) : (
            <IconText
              // framer-motion
              key="menu-open"
              variants={textVariants}
              initial="enter"
              animate="visible"
              exit="exit"
            >
              Menu
            </IconText>
          )}
        </AnimatePresence>

        <IconContainer isOpened={isOpened}>
          <Line aria-hidden="true" />
          <Line aria-hidden="true" />
          <Line aria-hidden="true" />
        </IconContainer>
      </MenuContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  position: relative;
`;

type BackdropProps = {
  isFullScreen: boolean;
};
const Backdrop = styled.div<BackdropProps>`
  position: fixed;

  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1),
    background 1s cubic-bezier(0.86, 0, 0.07, 1);
  ${tw`w-8 h-8 block pointer-events-none bg-accent rounded-full`};

  ${(p) =>
    p.isFullScreen &&
    css`
      transform: scale(130);
      ${tw`bg-secondary z-20 pointer-events-auto`}
    `}
`;

type MenuContainerProps = {
  isOpened: boolean;
};
const MenuContainer = styled.a<MenuContainerProps>`
  ${tw`h-4 flex justify-center items-center space-x-3 relative z-40 transition-all duration-300 ease-in-out hocus:outline-none`}

  :hover, :focus {
    ${tw`h-6`};

    ${(p) =>
      p.isOpened &&
      css`
        ${tw`hocus:h-4`}
      `}

    span {
      ${tw`border-textColor`}
    }
  }
`;

type IconTextProps = {};
const IconText = styled(motion.span)<IconTextProps>`
  ${tw`uppercase inline-block border-b border-transparent`}
  transition: border 300ms ease;
`;

type IconContainer = {
  isOpened: boolean;
};
const IconContainer = styled.div<IconContainer>`
  ${tw`h-full w-10 flex flex-col justify-between items-center cursor-pointer transition-all duration-300 ease-in-out`}

  ${(p) =>
    p.isOpened &&
    css`
      div {
        :nth-child(1) {
          transform: rotate(45deg);
        }

        :nth-child(2) {
          opacity: 0;
          transform: translateX(20px);
        }

        :nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    `}
`;

type LineProps = {};
const Line = styled.div<LineProps>`
  height: 0.1rem;
  transform-origin: 0.6rem;
  ${tw`block bg-textColor w-full  transition-all duration-300`}
`;

export { Hamburger };
