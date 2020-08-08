import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

type Props = ContainerProps & {};

function Footer({ height }: Props): ReactElement {
  return <Container height={height}></Container>;
}

type ContainerProps = {
  height: string;
};
const Container = styled.footer<ContainerProps>`
  height: ${(p) => p.height};
  ${tw`bg-secondary absolute bottom-0 w-full`};
`;

export { Footer };
