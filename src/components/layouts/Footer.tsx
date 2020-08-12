import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = ContainerProps & {};

/**
 * @description renders page's footer
 */
function Footer({ height }: Props): ReactElement {
  return <Container height={height}></Container>;
}

type ContainerProps = {
  height: string;
};
const Container = styled.footer<ContainerProps>`
  height: ${(p) => p.height};
  ${tw`bg-lprimary sticky bottom-0 left-0 w-full transition-all duration-300 ease-in-out`};
`;

export { Footer };
