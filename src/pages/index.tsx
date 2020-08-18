import { HeadTitle } from "@src/components/head/HeadTitle";
import { Button } from "@src/components/ui/Button";
import { TextCarousel } from "@src/components/ui/TextCarousel";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "@src/components/navigations/Link";

export default function Home() {
  const scrollingTexts = ["React", "Next.js", "UI/UX"];

  return (
    <>
      <HeadTitle title="Portfolio" />

      <HeroContainer>
        <AuthorName>Andrew Nguyen</AuthorName>
        <Heading>Welcome</Heading>
        <Summary>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
          aliquid sequi perferendis vel cum quasi, repudiandae iste nemo?
          Possimus atque laborum harum quae aliquam!
        </Summary>
        <Button>
          <Link href="/projects">See my projects</Link>
        </Button>
        <Button>
          <Link href="/projects">Have you met Andrew?</Link>
        </Button>
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
