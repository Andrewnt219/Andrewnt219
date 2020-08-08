import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

type Props = {};

function DesktopNavigationItems({}: Props): ReactElement {
  return <Container>NavItems</Container>;
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>``;

export { DesktopNavigationItems };
