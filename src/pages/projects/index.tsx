import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Head from "next/head";

type Props = {};

function Projects({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title key="title">About | Andrew Nguyen - React Web Developer</title>
      </Head>
      Projects
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default Projects;
