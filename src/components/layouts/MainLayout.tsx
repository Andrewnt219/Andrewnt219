import React, { ReactElement, ReactNode } from "react";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";

import { HeadMeta } from "../head/HeadMeta";
import { APPBAR_HEIGHT, FOOTER_HEIGHT } from "@src/constants/styles.constants";

type Props = {
  children: ReactNode;
};

/**
 * @description renders shared layout between pages
 */
function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <HeadMeta />

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
  padding: 0 5% 5rem 5%;
  min-height: calc(100vh - ${APPBAR_HEIGHT});
  
  ${tw`z-10 bg-primary relative top-0 transition-colors duration-theme ease-in-out`};
`;

export { MainLayout };
