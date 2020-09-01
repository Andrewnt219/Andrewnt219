import { getIndexesInRange } from "@src/helpers/utils.helpers";
import { useCarousel } from "@src/hooks";
import React, { ReactElement, useMemo } from "react";
import { keyframes } from "styled-components";
import tw, { styled, css } from "twin.macro";
import { ResponsiveImage } from "./ResponsiveImage";

export type CarouselImage = {
  src: string;
  alt: string;
};

type Option = {
  intervalInMs: number;
  displayRange?: number;
  focusedImgScale?: number;
};
type Props = {
  className?: string;
  images: CarouselImage[];
  options: Option;
  sizes: string;
};

function ImageCarousel({
  options: { intervalInMs = 2000, displayRange = 1, focusedImgScale = 1.5 },
  images,
  sizes,
  className,
}: Props): ReactElement {
  const { currentIndex } = useCarousel(intervalInMs, images.length);

  const displayedIndexes = useMemo(
    () => getIndexesInRange(displayRange, currentIndex, images.length),
    [currentIndex, displayRange, images.length]
  );

  return (
    <Container className={className}>
      {displayedIndexes.map((index) => (
        <Image
          key={images[index].src}
          isFocused={index === currentIndex}
          focusedScale={focusedImgScale}
          //
          alt={images[index].alt}
          path={images[index].src}
          sizes={sizes}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  ${tw`flex items-center justify-center`}
`;

const slideIn = keyframes`
  from {
    transform: translateX(50%);
  }

  to {
    transform: translateX(0) ;
  }
`;

const focus = (scale: number) => keyframes`
  from {
    transform: translateX(50%) scale(1);
    opacity: .5;

  }

  to {
    transform: translateX(0) scale(${scale});
    opacity: 1;
  }
`;

type ImageProps = {
  isFocused: boolean;
  focusedScale: number;
};
const Image = styled(ResponsiveImage)<ImageProps>`
  opacity: 0.7;
  animation: ${slideIn} 450ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background: var(--textColor);

  img {
    object-fit: cover;
  }

  ${(p) =>
    p.isFocused &&
    css`
      animation-name: ${focus(p.focusedScale)};
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      z-index: 10;
    `};
`;

export { ImageCarousel };
