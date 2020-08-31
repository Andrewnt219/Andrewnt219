import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

type Props = {};

function Snackbar({}: Props): ReactElement {
  return <Container></Container>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Snackbar };
