import { HeadTitle } from "@src/components/head/HeadTitle";
import { Button } from "@src/components/ui/Button";
import { TextCarousel } from "@src/components/ui/TextCarousel";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "@src/components/navigations/Link";
import { APPBAR_HEIGHT } from "@src/constants/styles.constants";

const BREAKPOINT = "lg";
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

        <CustomButton>
          <Link href="/projects">See my projects</Link>
        </CustomButton>
        <TextCarousel texts={carouselTexts} intervalInMs={2000} />
      </HeroContainer>
      <Button>Next</Button>
    </>
  );
}

type HeroContainerProps = {};
const HeroContainer = styled.section<HeroContainerProps>`
  height: calc(100vh - ${APPBAR_HEIGHT});
  ${tw`relative z-10 text-2xl font-heading`}
  padding-top: 5rem;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
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

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    ${tw`text-6xl`}
  }
`;

type AuthorNameProps = {};
const AuthorName = styled.span<AuthorNameProps>`
  ${tw`block uppercase tracking-aloof text-ltextColor font-hBold`}
  font-size: smaller;
`;

type SummaryProps = {};
const Summary = styled.h2<SummaryProps>`
  font-size: inherit;
`;

type CustomButtonProps = {};
const CustomButton = styled(Button)<CustomButtonProps>`
  padding: 0.5rem 2rem;
  margin-top: 4rem;
  font-size: smaller;
`;
