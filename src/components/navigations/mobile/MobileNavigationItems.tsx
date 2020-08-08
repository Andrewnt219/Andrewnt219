import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {};

function MobileNavigationItems({}: Props): ReactElement {
  return <Container>Mobile Nav Items</Container>;
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>``;

export { MobileNavigationItems };
