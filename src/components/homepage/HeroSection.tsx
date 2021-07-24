import { Button } from '@src/components/ui/Button';
import { ImageCarousel } from '@src/components/ui/ImageCarousel';
import { GaCategories } from '@src/constants/ga.constants';
import { GlobalStyling } from '@src/constants/global.constants';
import {
  HomepageSectionIds,
  HomepageStyling,
} from '@src/constants/homepage.constants';
import { carouselImages } from '@src/data/images.data';
import { useMediaQuery, useSidebarActive } from '@src/hooks';
import { useAnalytics } from '@src/hooks/useAnalytic';
import NextLink from 'next/link';
import React, { ReactElement } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { keyframes } from 'styled-components';
import tw, { styled } from 'twin.macro';

enum CarouselStyling {
  ImageWidthMobile = '25vw',
  ImageWidthDesktop = '15vw',
}
enum Carousel {
  FocusedImageScale = 1.5,
  DisplayRange = 1,
  IntervalInMs = 2000,
}

const CAROUSEL_SIZES = `${CarouselStyling.ImageWidthMobile}`;
const SECTION_ID = HomepageSectionIds.Hero;

function HeroSection(): ReactElement {
  /* ANCHOR tracking */
  const { trackEvent } = useAnalytics();

  const projectsButtonClickHandler = () => {
    trackEvent({ action: 'Clicked Projects', category: GaCategories.Hero });
  };

  // Change active section in sidebar
  // Check if HeroSection is inView
  const [ref, inView] = useSidebarActive(SECTION_ID);

  /* ANCHOR Carousel */
  // Stop carousel when out of view
  const carouselInvtervalInMs = inView
    ? Carousel.IntervalInMs
    : Carousel.IntervalInMs * 9999;

  // Switch between horizontal and vertical carousel
  const isDesktopOrLandscape = useMediaQuery(
    GlobalStyling.DesktopBreakpoint,
    'landscape'
  );

  /* ANCHOR Event handlers */
  const onArrowDownClicked = () => {
    document.getElementById(HomepageSectionIds.Projects)?.scrollIntoView();
    trackEvent({ action: 'Arrow Down Clicked', category: 'Hero Section' });
  };

  return (
    <Container ref={ref} id={SECTION_ID}>
      <InfoContainer>
        <AuthorName>Andrew Nguyen</AuthorName>

        <Heading>People-oriented Web&nbsp;Developer</Heading>

        <Summary>
          Writing codes that does not upset readers. Creating&nbsp;websites that
          does&nbsp;not confuse&nbsp;users
        </Summary>

        <StyledButtonWrapper>
          <NextLink href={`/#${HomepageSectionIds.Projects}`} passHref>
            <CustomButton
              anchorProps
              primary
              onClick={projectsButtonClickHandler}
            >
              See my projects
            </CustomButton>
          </NextLink>

          <CustomLinkButton
            primary
            anchorProps={{
              href: 'https://blog.andrewnt.dev/',
              target: '_blank',
              rel: 'noopener',
            }}
          >
            Checkout my blog
          </CustomLinkButton>
        </StyledButtonWrapper>
      </InfoContainer>

      {/* TODO For some reasons, every time the carousel move, a bunch of requests are sent */}
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
  padding: 0 ${HomepageStyling.PaddingY};
  height: calc(
    100vh - ${GlobalStyling.MobileBarHeight} - ${GlobalStyling.AppBarHeight}
  );

  ${tw`relative z-10 text-xl font-heading flex flex-col justify-center`}

  @media screen and (min-width: ${(p) =>
    p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-2xl flex-row items-center`}
    height: calc(100vh - ${GlobalStyling.AppBarHeight});
  }

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`text-lg flex-row items-center`}
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
  ${tw`font-hBold text-accent text-center`}

  font-size: 2.5em;
  * {
    color: inherit;
    font-size: inherit;
  }

  @media screen and (orientation: landscape) {
    ${tw` text-left`}
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

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2em;

  @media screen and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    flex-direction: column;
    margin-top: 2vh;
  }
`;

type CustomButtonProps = {};
const CustomButton = styled(Button)<CustomButtonProps>`
  font-size: smaller;
  max-width: 25rem;
`;

const CustomLinkButton = styled(Button)`
  margin-top: 2em;
  font-size: smaller;
  max-width: 25rem;
  background-color: #fff;
  color: #000;
  box-shadow: revert;
  border: 1px solid #ddd;
  margin-top: 0;
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

    margin-top: 0;
    height: max-content;
    width: calc(var(--img-width) * ${Carousel.FocusedImageScale});
  }

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    --img-width: ${CarouselStyling.ImageWidthDesktop};
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
