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
    y: -25,
  },
};

type Props = NavProps & {};

function AppBar({ height }: Props): ReactElement {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [ref, inView] = useInView({ rootMargin: "100px" });

  const navContent = (
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
      <Nav height={height} ref={ref}>
        {navContent}
      </Nav>

      <AnimatePresence>
        {!inView && (
          <ScrolledNav
            variants={navBarVarirants}
            initial="hidden"
            animate="visible"
            exit="exit"
            //
            height={height}
          >
            {navContent}
          </ScrolledNav>
        )}
      </AnimatePresence>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.header<ContainerProps>`
  ${tw`relative z-10`}
`;
type NavProps = {
  height: string;
};
const navCss = css<NavProps>`
  height: ${(p) => p.height};

  ${tw`w-full bg-transparent transition-all duration-300 ease-in-out flex justify-end items-center p-5`}
`;

const Nav = styled.nav`
  ${navCss}
`;

const ScrolledNav = styled(motion.nav)`
  ${navCss}
  ${tw`bg-lprimary fixed top-0 left-0 shadow-md `}
`;

export { AppBar };
