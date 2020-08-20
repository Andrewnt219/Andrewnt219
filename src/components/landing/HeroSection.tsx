import React, { ReactElement } from "react";
import { Button } from "@src/components/ui/Button";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "@src/components/navigations/Link";
import { APPBAR_HEIGHT } from "@src/constants/styles.constants";
import { TextCarousel } from "@src/components/ui/TextCarousel";
import { ImageCarousel } from "@src/components/ui/ImageCarousel";
import { Row } from "../utils/Row";

type Props = {};

const BREAKPOINT = "xl";

function HeroSection({}: Props): ReactElement {
  const srcs: string[] = [];
  for (let i = 1; i <= 7; i++) {
    srcs.push(`/imgs/carousel/carousel-${i}.jpg`);
  }

  return (
    <Container>
      <InfoContainer>
        <AuthorName>Andrew Nguyen</AuthorName>

        <Heading>
          <span>People-oriented&nbsp;</span>
          <span>Web Developer</span>
        </Heading>

        <Summary>
          Writing codes that does not upset readers. Creating websites that does
          not confuse users
        </Summary>

        <CustomButton>
          <Link href="/projects">See my projects</Link>
        </CustomButton>

        <ImageCarousel imageSrcs={srcs} intervalInMs={2000} displayRange={1} />
      </InfoContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  height: calc(100vh - ${APPBAR_HEIGHT});
  ${tw`relative z-10 text-xl font-heading`}
  padding: 5vh 0;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    ${tw`text-2xl`}
  }
`;

type InfoContainerProps = {};
const InfoContainer = styled.article<InfoContainerProps>`
  width: 100%;
  height: 70%;
  ${tw`flex flex-col space-y-4`}

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    width: 60%;
    height: 100%;
    ${tw`space-y-6`}
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
    ${tw`text-5xl`}
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
  //! a weird bug make the custom props has lower specitivity than DarkButton props
  && {
    padding: 0.5rem 3.5rem;
    margin-top: 4rem;
    font-size: smaller;
    max-width: 20rem;
  }
`;

export { HeroSection };
