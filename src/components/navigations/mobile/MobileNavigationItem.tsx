import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {};

function MobileNavigationItem({}: Props): ReactElement {
  return <Container>Mobile Nav Item</Container>;
}

type ContainerProps = {};
const Container = styled.li<ContainerProps>``;

export { MobileNavigationItem };
