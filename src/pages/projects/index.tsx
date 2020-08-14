import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Head from "next/head";
import { HeadTitle } from "@src/components/head/HeadTitle";

type Props = {};

function Projects({}: Props): ReactElement {
  return (
    <>
      <Head>
        <HeadTitle title="Projects" />
      </Head>
      Projects
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Projects;
