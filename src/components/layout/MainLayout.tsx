import React, { ReactElement, ReactNode, useEffect } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props): ReactElement {
  const onThemeSwitch = () => {
    const nextTheme =
      document.body.className === "dark-mode" ? "light-mode" : "dark-mode";

    document.body.className = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <Container>
      <button onClick={onThemeSwitch}>Switch</button>
      <div>{children}</div>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { MainLayout };
