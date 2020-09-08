import React, { ReactElement } from "react";
import { keyframes } from "styled-components";
import tw, { styled } from "twin.macro";

type Props = { className?: string };

function Loader({ className }: Props): ReactElement {
  return (
    <Container className={className}>
      <StyledLoader aria-label="Loading content..." />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  ${tw`relative flex flex-col space-y-2 justify-center items-center`}
`;

const animloader = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
`;

type StyledLoaderProps = {};
const StyledLoader = styled.span<StyledLoaderProps>`
  width: 2em;
  height: 2em;
  background: currentColor;
  display: inline-block;
  border-radius: 50%;
  animation: ${animloader} 1s ease-in infinite;
`;

export { Loader };
