import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw from "twin.macro";
import { LightSwitch } from "../navigations/LightSwitch";

type Props = {
  children: ReactNode;
};

const APPBAR_HEIGHT = "5rem";
const FOOTER_HEIGHT = "10rem";

/**
 * @description renders shared layout between pages
 */
function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <AppBar height={APPBAR_HEIGHT} />

      <Main>{children}</Main>

      <Footer height={FOOTER_HEIGHT} />
      {/* <CustomLightSwitch /> */}
    </>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  /* padding: calc(${APPBAR_HEIGHT} + 1rem) 5% calc(${FOOTER_HEIGHT} + 5rem) 5%; */
  padding: 0 5% calc(${FOOTER_HEIGHT} + 5rem) 5%;

  ${tw`min-h-screen z-10 bg-primary relative top-0 transition-colors duration-theme ease-in-out`};
`;

type CustomLightSwitchProps = {};
const CustomLightSwitch = styled(LightSwitch)<CustomLightSwitchProps>`
  position: fixed;
  bottom: 2rem;
  right: 1rem;

  background: rgba(var(--secondary-color-rgb), 0.8);
  transition: background 300ms ease;

  ${tw`hocus:outline-none inline-flex justify-center items-center w-20 h-20 rounded-full z-20`}

  svg {
    font-size: 2rem;
    transition: fill 300ms ease;
  }

  :hover,
  :focus {
    ${tw`bg-textColor`}
    svg {
      fill: var(--primary-color);
    }
  }
`;

export { MainLayout };
