import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

type Props = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function Hamburger({ setIsOpened, isOpened }: Props): ReactElement {
  return (
    <Container>
      <Backdrop isFullScreen={isOpened} />

      <MenuContainer
        href="#menu"
        isOpened={isOpened}
        onClick={(e) => {
          e.preventDefault();
          setIsOpened((prev) => !prev);
        }}
        // accessibility
        aria-label="Open the menu"
        aria-expanded={isOpened}
        role="button"
        tabIndex={0}
      >
        {/*// TODO add transition slide in */}
        {!isOpened && <IconText>Menu</IconText>}
        {isOpened && <IconText>Close</IconText>}

        <IconContainer isOpened={isOpened}>
          <Line aria-hidden="true" />
          <Line aria-hidden="true" />
          <Line aria-hidden="true" />
        </IconContainer>
      </MenuContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  position: relative;
`;

type BackdropProps = {
  isFullScreen: boolean;
};
const Backdrop = styled.div<BackdropProps>`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1),
    background 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  ${tw`w-8 h-8 block pointer-events-none absolute bg-transparent rounded-full`};

  ${(p) =>
    p.isFullScreen &&
    css`
      transform: translate(-50%, -50%) scale(130);
      ${tw`bg-secondary z-20 pointer-events-auto`}
    `}
`;

type MenuContainerProps = {
  isOpened: boolean;
};
const MenuContainer = styled.a<MenuContainerProps>`
  ${tw`h-4 flex justify-center items-center space-x-3 relative z-40 transition-all duration-300 ease-in-out hocus:outline-none`}
  filter: brightness(0.8);

  :hover,
  :focus {
    filter: brightness(1.2);
    ${tw`h-6`};

    ${(p) =>
      p.isOpened &&
      css`
        ${tw`hocus:h-4`}
      `}

    span {
      ${tw`border-textColor`}
    }
  }
`;

type IconTextProps = {};
const IconText = styled.span<IconTextProps>`
  ${tw`uppercase inline-block border-b border-transparent transition-all duration-300 ease-in-out`}
`;

type IconContainer = {
  isOpened: boolean;
};
const IconContainer = styled.div<IconContainer>`
  ${tw`h-full w-10 flex flex-col justify-between items-center cursor-pointer transition-all duration-300 ease-in-out`}

  ${(p) =>
    p.isOpened &&
    css`
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
  height: 0.1rem;
  transform-origin: 0.6rem;
  ${tw`block bg-textColor w-full  transition-all duration-300`}
`;

export { Hamburger };
