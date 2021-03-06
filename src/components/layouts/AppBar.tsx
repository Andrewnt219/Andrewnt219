import React, { ReactElement } from "react";
import tw, { styled, css } from "twin.macro";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Logo } from "../ui/Logo";
import { MobileNavigation } from "../navigations/mobile/MobileNavigation";
import { DesktopNavigation } from "../navigations/desktop/DesktopNavigation";
import { useMediaQuery } from "@src/hooks";

type Props = NavProps & {};
/**
 * @description renders a static nav bar and fixed nav bar
 */
function AppBar({ height }: Props): ReactElement {
  /* control static bar observer */
  const [ref, inView] = useInView();

  /* media queries */
  const showDesktopNavigation = useMediaQuery();
  const enableAnimation = useMediaQuery("xl");

  /* static and fixed nav contents */
  const sharedNavContent = showDesktopNavigation ? (
    <DesktopNavigation />
  ) : (
    <MobileNavigation />
  );

  return (
    <Container>
      <StaticNav aria-label="Primary" height={height} ref={ref}>
        {/* NOTE do not put Logo in shared */}
        <Logo animated={enableAnimation} />
        {inView && sharedNavContent}
      </StaticNav>

      <AnimatePresence>
        {!inView && (
          <FixedNav
            aria-label="Primary"
            // framer motion
            variants={navBarVarirants}
            initial="hidden"
            animate="visible"
            exit="exit"
            //
            height={height}
          >
            {/* NOTE do not put Logo in shared */}
            <Logo />
            {sharedNavContent}
          </FixedNav>
        )}
      </AnimatePresence>
    </Container>
  );
}

const navBarVarirants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    y: -25,
  },
};

type ContainerProps = {};
const Container = styled.header<ContainerProps>`
  ${tw`relative z-20`}
`;
type NavProps = {
  height: string;
};
const navCss = css<NavProps>`
  height: ${(p) => p.height};
  transition-property: background-color;
  ${tw`relative w-full bg-primary duration-theme ease-theme flex justify-between items-center px-5 py-10`};
`;

const StaticNav = styled.nav`
  ${navCss}
  ${tw`z-20`}
`;

const FixedNav = styled(motion.nav)`
  ${navCss}
  ${tw`bg-primary fixed top-0 left-0 z-10`};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export { AppBar };
