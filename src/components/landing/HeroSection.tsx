import React, { ReactElement } from "react";
import { Button } from "@src/components/ui/Button";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "@src/components/navigations/Link";
import { APPBAR_HEIGHT } from "@src/constants/styles.constants";

import { ImageCarousel } from "@src/components/ui/ImageCarousel";

type Props = {};

const BREAKPOINT = "xl";
const IMAGE_SOURCES: string[] = [];
for (let i = 1; i <= 7; i++) {
  IMAGE_SOURCES.push(`/imgs/carousel/carousel-${i}.webp`);
}

function HeroSection({}: Props): ReactElement {
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
      </InfoContainer>
      <CarouselContainer>
        <ImageCarousel
          imageSrcs={IMAGE_SOURCES}
          options={{ intervalInMs: 2000, displayRange: 1 }}
          imgHeight="15rem"
          imgWidth="10rem"
        />
      </CarouselContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  height: calc(100vh - ${APPBAR_HEIGHT});
  ${tw`relative z-10 text-xl font-heading flex flex-col justify-center`}
  padding: 5vh 0;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    ${tw`text-2xl flex-row`}
  }
`;

type InfoContainerProps = {};
const InfoContainer = styled.article<InfoContainerProps>`
  width: 100%;
  ${tw`flex flex-col space-y-4 items-center`}


  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    width: 60%;
    height: 100%;
    ${tw`space-y-6 items-start`}
  }
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-4xl font-hBold text-accent flex flex-wrap justify-center`}

  * {
    color: inherit;
    font-size: inherit;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    ${tw`text-5xl justify-start`}
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
  text-align: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    text-align: left;
  }
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

type CarouselContainerProps = {};
const CarouselContainer = styled.div<CarouselContainerProps>`
  --img-height: 15vmin;
  --width-scale: 3/2;

  ${tw` flex items-center mx-auto`}
  margin-top: 10%;
  height: calc(var(--img-height) * 1.5);

  img {
    width: calc(var(--img-height) * var(--width-scale));
    height: var(--img-height);
    border-radius: 4px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    --img-height: 14vw;
    --width-scale: 3/4;

    margin-top: 0;
  }
`;

export { HeroSection };
