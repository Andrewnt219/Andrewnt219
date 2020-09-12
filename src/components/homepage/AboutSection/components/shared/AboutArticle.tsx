import { ResponsiveImage } from "@src/components/ui/ResponsiveImage";
import { GlobalStyling } from "@src/constants/global.constants";
import { AboutThumbnailProps } from "@src/data/images.data";
import React, { ReactElement, ReactNode } from "react";
import tw, { styled } from "twin.macro";

enum Styling {
  ThumbnailHeight = "35vw",
}

type Props = {
  thumbnail: AboutThumbnailProps;
  children: ReactNode;
};

function AboutArticle({ thumbnail, children }: Props): ReactElement {
  const { src, alt, title } = thumbnail;

  return (
    <Container>
      <ThumbnailContainer>
        {/* NOTE Intentionally set smaller sizes, because the image is blurred anyway */}
        <Thumbnail
          path={src}
          alt={alt}
          sizes="20vw"
          config={{ enablePlaceholder: true }}
          loading="lazy"
        />
        <ThumbnailTitle>{title}</ThumbnailTitle>
      </ThumbnailContainer>

      {children}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  margin-bottom: 4em;

  & > *:not(:last-child) {
    margin-bottom: 2em;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    margin-bottom: 6em;
  }
`;

type ThumbnailContainerProps = {};
const ThumbnailContainer = styled.div<ThumbnailContainerProps>`
  position: relative;

  && {
    margin-bottom: 1em;
  }

  :hover {
    img {
      transform: scale(1);
      filter: blur(1rem);
    }
  }
`;

type ThumbnailTitleProps = {};
const ThumbnailTitle = styled.h3<ThumbnailTitleProps>`
  ${tw`absolute top-1/2 left-0 transform -translate-y-1/2 text-center text-primary w-full font-hBold font-heading uppercase`};

  font-size: 1em;
  background: rgba(var(--text-color-rgb), 0.8);
  line-height: 2;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    font-size: 1.5em;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    font-size: 2em;
  }
`;

const Thumbnail = styled(ResponsiveImage)`
  ${tw`overflow-hidden rounded`}

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: blur(0.3rem);
    transform: scale(1.1);
    height: 25vh;
    transition: transform 300ms ease, filter 300ms linear;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    img {
      height: 30vw;
    }
  }
`;

export { AboutArticle };
