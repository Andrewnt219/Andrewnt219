import React, { ReactElement } from "react";
import { styled } from "twin.macro";
import Head from "next/head";
import { HeadTitle } from "@src/components/head/HeadTitle";

type Props = {};

function Projects({}: Props): ReactElement {
  return (
    <>
      <HeadTitle title="Projects" />
      Projects
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Projects;
