import { getIndexesInRange } from "@src/helpers/utils.helpers";
import { useCarousel } from "@src/hooks";
import React, { ReactElement, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import tw, { css } from "twin.macro";

type Option = {
  intervalInMs: number;
  displayRange?: number;
  focusedImgScale?: number;
};
type Props = {
  className?: string;
  imageSrcs: string[];
  imgWidth?: string;
  imgHeight?: string;
  options: Option;
};

function ImageCarousel({
  options: { intervalInMs = 2000, displayRange = 1, focusedImgScale = 1.5 },
  imgWidth = "250",
  imgHeight = "250",
  imageSrcs,
  className,
}: Props): ReactElement {
  const { currentIndex } = useCarousel(intervalInMs, imageSrcs.length);

  const displayedIndexes = useMemo(
    () => getIndexesInRange(displayRange, currentIndex, imageSrcs.length),
    [currentIndex, displayRange, imageSrcs.length]
  );

  return (
    <Container imageHeight={imgHeight} className={className}>
      {displayedIndexes.map((index) => (
        <Image
          key={imageSrcs[index]}
          isFocused={index === currentIndex}
          scale={focusedImgScale}
          //
          alt={imageSrcs[index]}
          src={imageSrcs[index]}
          width={imgWidth}
          height={imgHeight}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {
  imageHeight: string;
};
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

type TextProps = {
  isFocused: boolean;
  width: string;
  height: string;
  scale: number;
};
const Image = styled.img<TextProps>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  object-fit: cover;
  opacity: 0.7;
  animation: ${slideIn} 450ms cubic-bezier(0, 0, 0.2, 1) forwards;
  background: var(--textColor);

  ${(p) =>
    p.isFocused &&
    css`
      animation-name: ${focus(1.5)};
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
      z-index: 10;
    `};
`;

export { ImageCarousel };
