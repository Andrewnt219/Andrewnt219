import React, { ReactElement } from "react";

import { styled } from "twin.macro";

type Props = {};

function ProjectName({}: Props): ReactElement {
  return <div>ProjectName</div>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default ProjectName;
