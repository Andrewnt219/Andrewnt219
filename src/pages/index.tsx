import { HeadTitle } from "@src/components/head/HeadTitle";
import { NightSky } from "@src/components/ui/NightSky";
import { ThemeContext } from "@src/contexts/theme.context";
import { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export default function Home() {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <HeadTitle title="Portfolio" />
      <Container>
        <Heading>Welcome</Heading>
      </Container>
      {mode === "dark-mode" && <CustomNightSky />}
    </>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  ${tw`relative z-10`}
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;

type CustomNightSkyProps = {};
const CustomNightSky = styled(NightSky)<CustomNightSkyProps>`
  ${tw`absolute top-0 left-0 w-screen h-full`}
`;
