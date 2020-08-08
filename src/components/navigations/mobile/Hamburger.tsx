import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

type Props = {};

function Hamburger({}: Props): ReactElement {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Container
      href="#"
      onClick={() => setIsOpened((prev) => !prev)}
      isOpened={isOpened}
      // accessibility
      aria-label="Open the menu"
      aria-expanded={isOpened}
      role="button"
      tabIndex={0}
    >
      <Line aria-hidden="true" />
      <Line aria-hidden="true" />
      <Line aria-hidden="true" />
    </Container>
  );
}

type ContainerProps = {
  isOpened: boolean;
};
const Container = styled.a<ContainerProps>`
  ${tw`h-6 w-10 flex flex-col justify-between items-center cursor-pointer transition-all duration-300 ease-in-out hocus:h-8 hocus:outline-none`}

  ${(p) =>
    p.isOpened &&
    css`
      ${tw`hocus:h-6`}

      div {
        :nth-child(1) {
          transform: rotate(45deg);
        }

        :nth-child(2) {
          opacity: 0;
          transform: translateX(20px);
        }

        :nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    `}
`;

type LineProps = {};
const Line = styled.div<LineProps>`
  height: 0.2rem;
  transform-origin: 5px;
  ${tw`block bg-textColor w-full transition-all duration-300 `}
`;

export { Hamburger };
