import { getIndexesInRange } from "@src/helpers/utils.helpers";
import { useCarousel } from "@src/hooks";
import React, { ReactElement, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import tw, { css } from "twin.macro";
import { ResponsiveImage } from "./ResponsiveImage";

type Option = {
  intervalInMs: number;
  displayRange?: number;
  focusedImgScale?: number;
};
type Props = {
  className?: string;
  imageSrcs: string[];
  options: Option;
  sizes: string;
};

function ImageCarousel({
  options: { intervalInMs = 2000, displayRange = 1, focusedImgScale = 1.5 },
  imageSrcs,
  sizes,
  className,
}: Props): ReactElement {
  const { currentIndex } = useCarousel(intervalInMs, imageSrcs.length);

  const displayedIndexes = useMemo(
    () => getIndexesInRange(displayRange, currentIndex, imageSrcs.length),
    [currentIndex, displayRange, imageSrcs.length]
  );

  return (
    <Container className={className}>
      {displayedIndexes.map((index) => (
        <Image
          key={imageSrcs[index]}
          isFocused={index === currentIndex}
          focusedScale={focusedImgScale}
          //
          alt={imageSrcs[index]}
          path={imageSrcs[index]}
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
  object-fit: cover;
  opacity: 0.7;
  animation: ${slideIn} 450ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background: var(--textColor);

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
