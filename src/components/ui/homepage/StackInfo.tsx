import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { StackInfo as StackInfoProps } from "@src/data/homepageProjects.data";
import React, { ReactElement, useContext } from "react";
import tw, { css, styled } from "twin.macro";

type Props = {
  data: StackInfoProps;
  className?: string;
};

function StackInfo({ data, className }: Props): ReactElement {
  const { imageSource, name } = data;

  /* Styling bases on light/dark */
  const { mode } = useContext(ColorThemeContext);
  const isDarkMode = mode === "dark-mode";

  return (
    <Container className={className}>
      <StackName>{name}</StackName>
      <StackIcon
        src={imageSource}
        alt={name}
        isDarkMode={isDarkMode}
        title={name}
      />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type StackNameProps = {};
const StackName = styled.span<StackNameProps>``;

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
