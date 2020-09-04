import React, { ReactElement, useContext, useEffect } from "react";
import { Button } from "@src/components/ui/Button";
import tw, { styled } from "twin.macro";
import NextLink from "next/link";
import { GlobalStyling } from "@src/constants/global.constants";
import { ImageCarousel } from "@src/components/ui/ImageCarousel";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";
import { keyframes } from "styled-components";
import {
  HomepageSection,
  HomepageSectionIds,
} from "@src/constants/homepage.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import { carouselImages } from "@src/data/carouselImages.data";
import { useMediaQuery } from "@src/hooks";

enum CarouselStyling {
  ImageWidthMobile = "25vw",
  ImageWidthDesktop = "15vw",
}
enum Carousel {
  FocusedImageScale = 1.5,
  DisplayRange = 1,
  IntervalInMs = 2000,
}

const CAROUSEL_SIZES = `(min-width: ${GlobalStyling.DesktopBreakpoint}) ${CarouselStyling.ImageWidthDesktop}, ${CarouselStyling.ImageWidthMobile}`;
const SECTION_ID = HomepageSectionIds.Hero;

function HeroSection(): ReactElement {
  /* SECTION Carousel */
  /* Stop carousel out of view */
  const [ref, inView] = useInView({
    threshold: HomepageSection.InViewThreshold,
  });
  const carouselInvtervalInMs = inView
    ? Carousel.IntervalInMs
    : Carousel.IntervalInMs * 9999;

  const isDesktopOrLandscape = useMediaQuery(
    GlobalStyling.DesktopBreakpoint,
    "landscape"
  );
  /* !SECTION Carousel */

  /* SECTION Sidebar active link */
  const { onSectionSwitch } = useContext(HomepageSections);

  useEffect(() => {
    if (inView) {
      onSectionSwitch(SECTION_ID);
    }
  }, [inView, onSectionSwitch]);
  /* !SECTION Sidebar active link */

  /* SECTION Event handlers */
  const onArrowDownClicked = () => {
    document.getElementById(HomepageSectionIds.Projects)?.scrollIntoView();
  };
  /* !SECTION Event handlers */

  return (
    <Container ref={ref} id={SECTION_ID}>
      <InfoContainer>
        <AuthorName>Andrew Nguyen</AuthorName>

        <Heading>People-oriented Web&nbsp;Developer</Heading>

        <Summary>
          Writing codes that does not upset readers. Creating&nbsp;websites that
          does&nbsp;not confuse&nbsp;users
        </Summary>

        <NextLink href={`/#${HomepageSectionIds.Projects}`} passHref>
          <CustomButton isButtonLink>See my projects</CustomButton>
        </NextLink>
      </InfoContainer>

      <CarouselContainer
        images={carouselImages}
        options={{
          intervalInMs: carouselInvtervalInMs,
          displayRange: Carousel.DisplayRange,
          focusedImgScale: Carousel.FocusedImageScale,
          isHorizontal: !isDesktopOrLandscape,
        }}
        sizes={CAROUSEL_SIZES}
      />

      <BouncingArrowDown onClick={onArrowDownClicked} />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  height: calc(
    100vh - ${GlobalStyling.MobileBarHeight} - ${GlobalStyling.AppBarHeight}
  );

  ${tw`relative z-10 text-xl font-heading flex flex-col justify-center`}

  @media screen and (min-width: ${(p) =>
    p.theme.breakpoints[GlobalStyling.ModernMobileBreakpoint]}) {
    ${tw`text-2xl`}
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-3xl flex-row items-center`}
    height: calc(100vh - ${GlobalStyling.AppBarHeight});
  }

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-xl flex-row items-center`}
    height: calc(100vh - ${GlobalStyling.AppBarHeight});
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
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}),
    (orientation: landscape) {
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
  ${tw`text-4xl font-hBold text-accent text-center`}

  * {
    color: inherit;
    font-size: inherit;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.ModernMobileBreakpoint]}) {
    ${tw`text-5xl`}
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-6xl text-left`}
  }

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-left text-4xl`}
  }
`;

type SummaryProps = {};
const Summary = styled.h2<SummaryProps>`
  ${tw`text-center`}
  font-size: inherit;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}),
    (orientation: landscape) {
    ${tw`text-left`}
  }
`;

type CustomButtonProps = {};
const CustomButton = styled(Button)<CustomButtonProps>`
  margin-top: 2em;
  font-size: smaller;
  max-width: 25rem;

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    margin-top: 2vh;
  }
`;

type CarouselContainerProps = {};
const CarouselContainer = styled(ImageCarousel)<CarouselContainerProps>`
  --img-width: ${CarouselStyling.ImageWidthMobile};
  --height-scale: 2/3;

  ${tw` flex items-center mx-auto`}
  margin-top: 2em;
  height: calc(
    var(--img-width) * var(--height-scale) * ${Carousel.FocusedImageScale}
  );

  > *,
  img {
    height: calc(var(--img-width) * var(--height-scale));
    width: var(--img-width);
    ${tw`rounded`}
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    /* NOTE change these stats with caution, it might cause weird janking at certain screen width (img too big) */
    --img-width: ${CarouselStyling.ImageWidthDesktop};
    --height-scale: 2/3;

    margin-top: 0;
    height: max-content;
    width: calc(var(--img-width) * ${Carousel.FocusedImageScale});
  }

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    --img-width: ${CarouselStyling.ImageWidthDesktop};
    --height-scale: 2/3;
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
type BouncingArrowDownProps = {};
const BouncingArrowDown = styled(FaChevronDown)<BouncingArrowDownProps>`
  animation: ${bounce} 1s infinite;
  position: absolute;
  bottom: 1vh;
  left: 50%;
  cursor: pointer;
  fill: var(--accent-color);
  font-size: 3rem;
  /* When the animation stop, still keep position */
  transform: translateX(-50%);
`;

export { HeroSection };
