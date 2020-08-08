import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

const APPBAR_HEIGHT = "5rem";
const FOOTER_HEIGHT = "20rem";

function MainLayout({ children }: Props): ReactElement {
  return (
    <>
      <AppBar height={APPBAR_HEIGHT} />

      <Main>
        <button onClick={onThemeSwitch}>Switch</button>
        {children}
      </Main>

      <Footer height={FOOTER_HEIGHT} />
    </>
  );
}

function onThemeSwitch() {
  const nextTheme =
    document.body.className === "dark-mode" ? "light-mode" : "dark-mode";

  document.body.className = nextTheme;
  localStorage.setItem("theme", nextTheme);
}

type MainProps = {};
const Main = styled.main<MainProps>`
  margin-top: calc(${APPBAR_HEIGHT} + 1rem);
  padding-bottom: calc(${FOOTER_HEIGHT} + 5rem);
`;

export { MainLayout };
