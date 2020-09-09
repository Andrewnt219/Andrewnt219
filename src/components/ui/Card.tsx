import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import React, { ReactElement, ReactNode, useContext } from "react";
import tw, { css, styled, theme } from "twin.macro";

type Props = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: Props): ReactElement {
  const { mode } = useContext(ColorThemeContext);

  return (
    <Container className={className} isDarkMode={mode === "dark-mode"}>
      {children}
    </Container>
  );
}

type ContainerProps = {
  isDarkMode: boolean;
};
const Container = styled.div<ContainerProps>`
  ${tw`text-textColor  border-2 border-borderColor p-10 rounded`}

  transition: background-color ${theme`transitionDuration.theme`}
    ${theme`transitionTimingFunction.theme`},
  border ${theme`transitionDuration.200`} ease;

  :hover,
  :focus-within {
    ${tw`border-accent`}
  }

  ${(p) =>
    p.isDarkMode
      ? css`
          ${tw`bg-lprimary`}
        `
      : css`
          ${tw`bg-primary`}
        `}
`;

export { Card };
