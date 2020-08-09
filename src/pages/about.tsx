import { MainLayout } from "@src/components/layouts/MainLayout";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = {};

function About({}: Props): ReactElement {
  return <div>About</div>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default About;
