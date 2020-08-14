import { MainLayout } from "@src/components/layouts/MainLayout";
import Head from "next/head";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = {};

function About({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title key="title">About | Andrew Nguyen - React Web Developer</title>
      </Head>
      About
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default About;
