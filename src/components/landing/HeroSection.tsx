import React, { ReactElement } from "react";
import { Button } from "@src/components/ui/Button";
import tw, { styled } from "twin.macro";
import { Link } from "@src/components/navigations/Link";
import { APPBAR_HEIGHT } from "@src/constants/styles.constants";
import { ImageCarousel } from "@src/components/ui/ImageCarousel";
import { useInView } from "react-intersection-observer";

enum Styling {
  Breakpoint = "xl",
  CarouselSizes = "(min-width: 1200px) 40vw, 40vmin",
}

enum Carousel {
  NumberOfImages = 11,
  FocusedImageScale = 1.5,
  DisplayRange = 1,
  IntervalInMs = 2000,
}

const IMAGE_SOURCES: string[] = [];
for (let i = 1; i <= Carousel.NumberOfImages; i++) {
  IMAGE_SOURCES.push(`carousel/carousel-${i}.jpg`);
}

type Props = {};
function HeroSection({}: Props): ReactElement {
  const [ref, inView] = useInView();
  const carouselInvtervalInMs = inView
    ? Carousel.IntervalInMs
    : Carousel.IntervalInMs * 9999;

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

      <CarouselContainer ref={ref}>
        <ImageCarousel
          imageSrcs={IMAGE_SOURCES}
          options={{
            intervalInMs: carouselInvtervalInMs,
            displayRange: Carousel.DisplayRange,
            focusedImgScale: Carousel.FocusedImageScale,
          }}
          sizes={Styling.CarouselSizes}
        />
      </CarouselContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  height: calc(100vh - ${APPBAR_HEIGHT});
  ${tw`relative z-10 text-xl font-heading flex flex-col justify-center`}

  @media screen and (min-width: ${(p) =>
    p.theme.breakpoints[Styling.Breakpoint]}) {
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
      p.theme.breakpoints[Styling.Breakpoint]}) {
    width: 60%;
    ${tw`items-start`}
  }
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-4xl font-hBold text-accent flex flex-wrap justify-center`}

  * {
    color: inherit;
    font-size: inherit;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[Styling.Breakpoint]}) {
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

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[Styling.Breakpoint]}) {
    text-align: left;
  }
`;

type CustomButtonProps = {};
const CustomButton = styled(Button)<CustomButtonProps>`
  margin-top: 2vh;
  font-size: smaller;
  max-width: 20rem;
`;

type CarouselContainerProps = {};
const CarouselContainer = styled.div<CarouselContainerProps>`
  --img-height: 15vmin;
  --width-scale: 3/2;

  ${tw` flex items-center mx-auto`}
  margin-top: 4vh;
  height: calc(var(--img-height) * ${Carousel.FocusedImageScale});

  picture,
  img {
    width: calc(var(--img-height) * var(--width-scale));
    height: var(--img-height);
    border-radius: 4px;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[Styling.Breakpoint]}) {
    --img-height: 14vw;
    --width-scale: 3/4;

    margin-top: 0;
  }
`;

export { HeroSection };
