import { HeadTitle } from "@src/components/head/HeadTitle";
import { Button } from "@src/components/ui/Button";
import { TextCarousel } from "@src/components/ui/TextCarousel";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "@src/components/navigations/Link";
import { DESKTOP_SCREEN_BREAKPOINT } from "@src/constants/mediaQuery.constants";
import { Row } from "@src/components/utils/Row";

export default function Home() {
  const carouselTexts = ["React", "Next.js", "UI/UX"];

  return (
    <>
      <HeadTitle title="Portfolio" />

      <HeroContainer>
        <AuthorName>Andrew Nguyen</AuthorName>

        <Heading>
          <span>People-oriented</span>&nbsp;<span>Web Developer</span>
        </Heading>

        <Summary>
          Writing codes that does not upset readers. Creating websites that does
          not confuse users
        </Summary>

        <CustomRow gap="2rem">
          <Button>
            <Link href="/projects">See my projects</Link>
          </Button>

          <Button secondary>
            <Link href="/projects">Have you met Andrew?</Link>
          </Button>
        </CustomRow>
        <TextCarousel texts={carouselTexts} intervalInMs={2000} />
      </HeroContainer>
      <Button>Next</Button>
    </>
  );
}

type HeroContainerProps = {};
const HeroContainer = styled.section<HeroContainerProps>`
  ${tw`relative z-10 text-xl`}
  padding-top: 10vh;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[DESKTOP_SCREEN_BREAKPOINT]}) {
    ${tw`text-3xl`}
  }
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-4xl font-hBold text-accent`}
  display: flex;
  flex-wrap: wrap;

  * {
    color: inherit;
    font-size: inherit;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[DESKTOP_SCREEN_BREAKPOINT]}) {
    ${tw`text-6xl`}
  }
`;

type AuthorNameProps = {};
const AuthorName = styled.span<AuthorNameProps>`
  ${tw`block uppercase tracking-aloof text-ltextColor font-hBold`}
  font-size: smaller;
`;

type SummaryProps = {};
const Summary = styled.p<SummaryProps>`
  font-size: inherit;
`;

type CustomRowProps = {};
const CustomRow = styled(Row)<CustomRowProps>`
  margin-top: 2rem;
  font-size: 1rem;
`;
