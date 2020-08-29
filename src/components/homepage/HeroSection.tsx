import React, { ReactElement } from "react";
import { Button } from "@src/components/ui/Button";
import tw, { styled } from "twin.macro";
import { Link } from "@src/components/navigations/Link";
import { GlobalStyling } from "@src/constants/globalStyles.constants";
import { ImageCarousel } from "@src/components/ui/ImageCarousel";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";
import { keyframes } from "styled-components";
import { ElementIds } from "@src/constants/elementIds.constants";

enum Styling {
  CarouselSizes = "(min-width: 1200px) 40vw, 40vmin",
}

enum Carousel {
  NumberOfImages = 4,
  FocusedImageScale = 1.5,
  DisplayRange = 1,
  IntervalInMs = 2000,
}

const IMAGE_SOURCES: string[] = [];
for (let i = 1; i <= Carousel.NumberOfImages; i++) {
  IMAGE_SOURCES.push(`carousel/carousel-${i}.jpg`);
}

function HeroSection(): ReactElement {
  /* Stop carousel out of view */
  const [ref, inView] = useInView();
  const carouselInvtervalInMs = inView
    ? Carousel.IntervalInMs
    : Carousel.IntervalInMs * 9999;

  /* Event handlers */
  const onArrowDownClicked = () => {
    document.getElementById(ElementIds.SkillsSection)?.scrollIntoView();
  };

  return (
    <Container ref={ref} id={ElementIds.HeroSection}>
      <InfoContainer>
        <AuthorName>Andrew Nguyen</AuthorName>

        <Heading>
          <span>People-oriented&nbsp;</span>
          <span>Web Developer</span>
        </Heading>

        <Summary>
          <span>Writing codes that does not upset readers.&nbsp;</span>
          <span>Creating websites that does not confuse users</span>
        </Summary>

        <CustomButton>
          <Link href="/projects">See my projects</Link>
        </CustomButton>
      </InfoContainer>

      <CarouselContainer
        imageSrcs={IMAGE_SOURCES}
        options={{
          intervalInMs: carouselInvtervalInMs,
          displayRange: Carousel.DisplayRange,
          focusedImgScale: Carousel.FocusedImageScale,
        }}
        sizes={Styling.CarouselSizes}
      />

      <BouncingArrowDown onClick={onArrowDownClicked} animated={inView} />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  --sectionHeight: calc(
    100vh - ${GlobalStyling.MobileBarHeight} - ${GlobalStyling.AppBarHeight}
  );

  ${tw`relative z-10 text-xl font-heading flex flex-col justify-center`}

  @media screen and (min-width: ${(p) =>
    p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    --sectionHeight: calc(100vh - ${GlobalStyling.AppBarHeight});
    ${tw`text-2xl flex-row items-center`}
  }
`;

type InfoContainerProps = {};
const InfoContainer = styled.article<InfoContainerProps>`
  width: 100%;
  ${tw`flex flex-col items-center`}

  > *:not(:last-child) {
    margin-bottom: 1vh;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    width: 60%;
    ${tw`items-start`}
  }
`;

type AuthorNameProps = {};
const AuthorName = styled.span<AuthorNameProps>`
  ${tw`block uppercase tracking-aloof text-ltextColor font-hBold`}
  font-size: smaller;
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-4xl font-hBold text-accent flex flex-wrap justify-center`}

  * {
    color: inherit;
    font-size: inherit;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-5xl justify-start`}
  }
`;

type SummaryProps = {};
const Summary = styled.h2<SummaryProps>`
  ${tw`flex flex-wrap justify-center text-center`}
  font-size: inherit;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`justify-start`}
  }
`;

type CustomButtonProps = {};
const CustomButton = styled(Button)<CustomButtonProps>`
  margin-top: 2vh;
  font-size: smaller;
  max-width: 20rem;
`;

type CarouselContainerProps = {};
const CarouselContainer = styled(ImageCarousel)<CarouselContainerProps>`
  --img-height: 15vmin;
  --width-scale: 3/2;

  ${tw` flex items-center mx-auto`}
  margin-top: 4vh;
  height: calc(var(--img-height) * ${Carousel.FocusedImageScale});

  > *,
  img {
    width: calc(var(--img-height) * var(--width-scale));
    height: var(--img-height);
    border-radius: 0.5rem;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    --img-height: 14vw;
    --width-scale: 3/4;

    margin-top: 0;
  }
`;

const bounce = keyframes`
  0%, 100% {
    animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
    /* -50% X because of absolute positioning*/
    transform: translate(-50%, -25%);
  }
  50% {
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
    /* -50% X because of absolute positioning*/
    transform: translate(-50%, 0);
  }
`;
type BouncingArrowDownProps = {
  animated?: boolean;
};
const BouncingArrowDown = styled(FaChevronDown)<BouncingArrowDownProps>`
  animation: ${(p) => (p.animated ? bounce : null)} 1s infinite;
  position: absolute;
  bottom: 1vh;
  left: 50%;
  cursor: pointer;
  fill: var(--accent-color);
  font-size: 3rem;
`;

export { HeroSection };
