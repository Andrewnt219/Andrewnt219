import { ElementIds } from "@src/constants/elementIds.constants";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

function SkillsSection(): ReactElement {
  return <Container id={ElementIds.ProjectsSection}></Container>;
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  ${tw`min-h-screen bg-lprimary`}
`;

export { SkillsSection };
