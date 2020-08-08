import React, { ReactElement } from "react";
import styled from "styled-components";
import { Hamburger } from "../navigations/mobile/Hamburger";
import { DesktopNavigationItems } from "../navigations/desktop/DesktopNavigationItems";
import tw from "tailwind.macro";

type Props = NavProps & {};

function AppBar({ height }: Props): ReactElement {
  return (
    <Container>
      <Nav height={height}>
        <Hamburger />
        <DesktopNavigationItems />
      </Nav>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.header<ContainerProps>``;

type NavProps = {
  height: string;
};
const Nav = styled.nav<NavProps>`
  height: ${(p) => p.height};
  ${tw`fixed top-0 left-0 w-full bg-primary`}
`;

export { AppBar };