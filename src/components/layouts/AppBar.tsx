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
      // delay to fix the initial inView (false)
      delay: 0.5,
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
  const [ref, inView] = useInView({ rootMargin: "200px" });

  const navContent = (
    <>
      <AnimatePresence>
        {menuIsOpened && (
          <NavigationItems onNavItemClicked={() => setMenuIsOpened(false)} />
        )}
      </AnimatePresence>
    </>
  );

  return (
    <Container>
      <Nav height={height} ref={ref}>
        {navContent}
        <Hamburger
          isOpened={menuIsOpened && inView}
          setIsOpened={setMenuIsOpened}
        />
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
            <Hamburger isOpened={menuIsOpened} setIsOpened={setMenuIsOpened} />
          </ScrolledNav>
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

  ${tw` w-full bg-transparent transition-all duration-300 ease-in-out flex justify-end items-center p-5`};
`;

const Nav = styled.nav`
  ${navCss}
`;

const ScrolledNav = styled(motion.nav)`
  ${navCss}
  ${tw`bg-lprimary fixed top-0 left-0 `};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export { AppBar };
