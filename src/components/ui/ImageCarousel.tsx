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
  isHorizontal?: boolean;
};
type Props = {
  className?: string;
  images: CarouselImage[];
  options: Option;
  sizes: string;
};

function ImageCarousel({
  options: {
    intervalInMs = 2000,
    displayRange = 1,
    focusedImgScale = 1.5,
    isHorizontal = true,
  },
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
    <Container className={className} isHorizontal={isHorizontal}>
      {displayedIndexes.map((index) => (
        <Image
          key={images[index].src}
          isFocused={index === currentIndex}
          focusedScale={focusedImgScale}
          isHorizontal={isHorizontal}
          //
          alt={images[index].alt}
          path={images[index].src}
          // NOTE Consider changing 12.5vw for reusability
          sizes={index === currentIndex ? sizes : "12.5vw"}
          config={{ enablePlaceholder: true }}
        />
      ))}
    </Container>
  );
}

enum Styling {
  FocusedImageInitialScale = 0.75,
}

type ContainerProps = {
  isHorizontal: boolean;
};
const Container = styled.div<ContainerProps>`
  ${tw`flex items-center justify-center`}
  flex-direction: ${(p) => (p.isHorizontal ? "row" : "column")};
`;

const slideIn = (isHorizontal: boolean) => keyframes`
${
  isHorizontal
    ? css`
        from {
          transform: translateX(50%);
        }

        to {
          transform: translateX(0);
        }
      `
    : css`
        from {
          transform: translateY(50%);
        }

        to {
          transform: translateY(0);
        }
      `
}`;

const focus = ({
  scale,
  isHorizontal,
}: {
  scale: number;
  isHorizontal: boolean;
}) => keyframes`
  from {    
    ${
      isHorizontal
        ? css`
            transform: translateX(50%)
              scale(${scale * Styling.FocusedImageInitialScale});
          `
        : css`
            transform: translateY(80%)
              scale(${scale * Styling.FocusedImageInitialScale});
          `
    } 
    opacity: 0.5;
  }

  to {
    ${
      isHorizontal
        ? css`
            transform: translateX(0) scale(${scale});
          `
        : css`
            transform: translateY(0) scale(${scale});
          `
    }
    opacity: 1;
  }
`;

type ImageProps = {
  isFocused: boolean;
  focusedScale: number;
  isHorizontal: boolean;
};
const Image = styled(ResponsiveImage)<ImageProps>`
  opacity: 0.7;
  ${({ isHorizontal }) => css`
    animation: ${slideIn(isHorizontal)} 450ms cubic-bezier(0, 0, 0.2, 1)
      forwards;
  `}

  background: var(--textColor);

  img {
    object-fit: cover;
  }

  ${({ focusedScale, isHorizontal, isFocused }) =>
    isFocused &&
    css`
      animation-name: ${focus({ scale: focusedScale, isHorizontal })};
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      z-index: 1;
    `};
`;

export { ImageCarousel };
