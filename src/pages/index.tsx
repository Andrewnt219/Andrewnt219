import { HeadTitle } from "@src/components/head/HeadTitle";
import { Button } from "@src/components/ui/Button";
import { TextCarousel } from "@src/components/ui/TextCarousel";
import { NightSky } from "@src/components/ui/NightSky";
import { ThemeContext } from "@src/contexts/theme.context";
import { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export default function Home() {
  const { mode } = useContext(ThemeContext);
  const scrollingTexts = ["React", "Next.js", "UI/UX"];

  return (
    <>
      <HeadTitle title="Portfolio" />

      {mode === "dark-mode" && <CustomNightSky />}
      <HeroContainer>
        <AuthorName>Andrew Nguyen</AuthorName>
        <Heading>Welcome</Heading>
        <Summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
          aliquid sequi perferendis vel cum quasi, repudiandae iste nemo?
          Possimus atque laborum harum quae aliquam!
        </Summary>
        <Button>See my projects</Button>
        <Button>Have you met Andrew?</Button>
        <TextCarousel texts={scrollingTexts} intervalInMs={2000} />
      </HeroContainer>
      <Button>Next</Button>
    </>
  );
}

type HeroContainerProps = {};
const HeroContainer = styled.section<HeroContainerProps>`
  ${tw`relative z-10`}
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;

type AuthorNameProps = {};
const AuthorName = styled.span<AuthorNameProps>`
  display: block;
`;

type SummaryProps = {};
const Summary = styled.p<SummaryProps>``;

type CustomNightSkyProps = {};
const CustomNightSky = styled(NightSky)<CustomNightSkyProps>`
  ${tw`absolute top-0 left-0 w-screen h-full`}
`;
