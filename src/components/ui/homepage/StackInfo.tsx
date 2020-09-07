import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { StackInfo } from "@src/data/homepageProjects.data";
import React, { ReactElement, useContext } from "react";
import tw, { css, styled } from "twin.macro";

type Props = {
  data: StackInfo;
};

function StackInfo({ data }: Props): ReactElement {
  const { imageSource, name } = data;

  /* Styling bases on light/dark */
  const { mode } = useContext(ColorThemeContext);
  const isDarkMode = mode === "dark-mode";

  return (
    <Container>
      <StackName>{name}</StackName>
      <StackIcon src={imageSource} alt={name} isDarkMode={isDarkMode} />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type StackNameProps = {};
const StackName = styled.span<StackNameProps>`
  font-size: 0.75em;
`;

type StackIconProps = {
  isDarkMode: boolean;
};
const StackIcon = styled.img<StackIconProps>`
  width: 2em;

  ${(p) =>
    p.isDarkMode &&
    css`
      filter: saturate(300%);
    `}
`;
export { StackInfo };
