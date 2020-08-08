import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

type Props = {};

function DesktopNavigationItem({}: Props): ReactElement {
  return <Container>NavItem</Container>;
}

type ContainerProps = {};
const Container = styled.li<ContainerProps>``;

export { DesktopNavigationItem };
