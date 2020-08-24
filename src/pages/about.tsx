import { HeadMeta } from "@src/components/head/HeadMeta";
import { HeadTitle } from "@src/components/head/HeadTitle";
import { MainLayout } from "@src/components/layouts/MainLayout";
import Head from "next/head";
import React, { ReactElement } from "react";
import { styled } from "twin.macro";

type Props = {};

function About({}: Props): ReactElement {
  return (
    <>
      <HeadTitle title="About" />
      About
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default About;
