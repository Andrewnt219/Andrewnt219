import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

type Props = {
  message: string;
};
function Snackbar({ message }: Props): ReactElement {
  // TODO a timer bar countdown snackbar disappear
  return <Container>{message}</Container>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  ${tw`z-50 px-5 py-2  rounded bg-secondary text-white transition-colors duration-theme ease-theme`}
  position: fixed;
  bottom: 2vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Snackbar };
