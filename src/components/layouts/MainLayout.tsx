import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw from "twin.macro";

type Props = {
  children: ReactNode;
};

const APPBAR_HEIGHT = "5rem";
const FOOTER_HEIGHT = "10rem";

function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <AppBar height={APPBAR_HEIGHT} />

      <Main>{children}</Main>

      <Footer height={FOOTER_HEIGHT} />
    </>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  padding: calc(${APPBAR_HEIGHT} + 1rem) 5% calc(${FOOTER_HEIGHT} + 5rem) 5%;

  ${tw`bg-primary transition-all duration-300 ease-in-out min-h-screen`};
`;

export { MainLayout };
