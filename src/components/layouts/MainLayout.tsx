import React, { ReactElement, ReactNode } from "react";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";

import { HeadMeta } from "../head/HeadMeta";
import { GlobalStyling } from "@src/constants/globalStyles.constants";

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

      <AppBar height={GlobalStyling.AppBarHeight} />

      <Main>{children}</Main>

      <Footer height={GlobalStyling.FooterHeight} />
      {/* <CustomLightSwitch /> */}
    </>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  padding: 0 5% 5rem 5%;
  min-height: calc(100vh - ${GlobalStyling.AppBarHeight});

  ${tw`z-10 bg-primary relative top-0 transition-colors duration-theme ease-theme`};
`;

export { MainLayout };
