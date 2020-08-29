import { ElementIds } from "@src/constants/elementIds.constants";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

type Props = {};

function SkillsSection({}: Props): ReactElement {
  return <Container id={ElementIds.SkillsSection}></Container>;
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  ${tw`min-h-screen bg-textColor`}
`;

export { SkillsSection };
