import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { Hamburger } from "../navigations/Hamburger";
import tw from "twin.macro";
import { NavigationItems } from "../navigations/NavigationItems";
import { AnimatePresence } from "framer-motion";

type Props = NavProps & {};

function AppBar({ height }: Props): ReactElement {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  return (
    <Container>
      <Nav height={height}>
        <AnimatePresence>
          {menuIsOpened && (
            <NavigationItems onNavItemClicked={() => setMenuIsOpened(false)} />
          )}
        </AnimatePresence>
        <Hamburger isOpened={menuIsOpened} setIsOpened={setMenuIsOpened} />
      </Nav>
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
const Nav = styled.nav<NavProps>`
  height: ${(p) => p.height};

  ${tw`fixed top-0 left-0 w-full bg-lprimary transition-all duration-300 ease-in-out flex justify-end items-center p-5`}
`;

export { AppBar };
