import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {};

function Hamburger({}: Props): ReactElement {
  return <Container>Hamburger</Container>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { Hamburger };
