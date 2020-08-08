import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { Hamburger } from "../navigations/mobile/Hamburger";
import { DesktopNavigationItems } from "../navigations/desktop/DesktopNavigationItems";
import tw from "twin.macro";

type Props = NavProps & {};

function AppBar({ height }: Props): ReactElement {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  return (
    <Container>
      <Nav height={height}>
        <DesktopNavigationItems />
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

  ${tw`fixed top-0 left-0 w-full bg-lprimary transition-all duration-300 ease-in-out flex justify-between items-center p-5`}
`;

export { AppBar };
