import React, { ReactElement, useCallback, useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import tw from "twin.macro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Logo } from "../ui/Logo";
import { MobileNavigation } from "../navigations/mobile/MobileNavigation";
import { DesktopNavigation } from "../navigations/desktop/DesktopNavigation";
import { useMediaQuery } from "@src/hooks";

const navBarVarirants: Variants = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: -150,
  },
};

type Props = NavProps & {};

/**
 * @description renders a static nav bar and fixed nav bar
 */
function AppBar({ height }: Props): ReactElement {
  /* control static bar observer */
  const [ref, inView] = useInView();

  /* control rendering mobile or desktop navigation */
  const { breakpoints } = useTheme();
  const isDesktopScreen = useMediaQuery(
    `screen and (min-width: ${breakpoints.md})`
  );

  /* static and fixed nav contents */
  const sharedNavContent = isDesktopScreen ? (
    <DesktopNavigation />
  ) : (
    <MobileNavigation />
  );

  return (
    <Container>
      <StaticNav height={height} ref={ref}>
        {/* //! do not put Logo in shared */}
        <Logo />
        {inView && sharedNavContent}
      </StaticNav>

      <AnimatePresence>
        {!inView && (
          <FixedNav
            // framer motion
            variants={navBarVarirants}
            initial="hidden"
            animate="visible"
            exit="exit"
            //
            height={height}
          >
            {/* //! do not put Logo in shared */}
            <Logo />
            {sharedNavContent}
          </FixedNav>
        )}
      </AnimatePresence>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.header<ContainerProps>`
  ${tw`relative z-20`}
`;
type NavProps = {
  height: string;
};
const navCss = css<NavProps>`
  height: ${(p) => p.height};

  ${tw`relative w-full bg-primary transition-all duration-300 ease-in-out flex justify-between items-center p-5`};
`;

const StaticNav = styled.nav`
  ${navCss}
  ${tw`z-20`}
`;

const FixedNav = styled(motion.nav)`
  ${navCss}
  ${tw`bg-lprimary fixed top-0 left-0 z-10`};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export { AppBar };
