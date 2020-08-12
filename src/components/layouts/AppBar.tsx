import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { Hamburger } from "../navigations/Hamburger";
import tw from "twin.macro";
import { NavigationItems } from "../navigations/NavigationItems";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

function AppBar({ height }: Props): ReactElement {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [ref, inView] = useInView();

  const sharedNavContent = (
    <>
      <AnimatePresence>
        {menuIsOpened && (
          <NavigationItems onNavItemClicked={() => setMenuIsOpened(false)} />
        )}
      </AnimatePresence>
      <Hamburger isOpened={menuIsOpened} setIsOpened={setMenuIsOpened} />
    </>
  );

  return (
    <Container>
      <StaticNav height={height} ref={ref}>
        {inView && sharedNavContent}
      </StaticNav>

      <AnimatePresence>
        {!inView && (
          <FixedNav
            variants={navBarVarirants}
            initial="hidden"
            animate="visible"
            exit="exit"
            //
            height={height}
          >
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

  ${tw`relative w-full bg-primary transition-all duration-300 ease-in-out flex justify-end items-center p-5`};
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
