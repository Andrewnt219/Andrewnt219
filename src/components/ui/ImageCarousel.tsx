import { getIndexesInRange } from "@src/helpers/utils.helpers";
import { useCarousel } from "@src/hooks";
import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  intervalInMs: number;
  imageSrcs: string[];
  displayRange?: number;
};

function ImageCarousel({
  intervalInMs,
  imageSrcs,
  displayRange = 1,
}: Props): ReactElement {
  const { currentIndex } = useCarousel(intervalInMs, imageSrcs.length);

  const displayedIndexes = getIndexesInRange(
    displayRange,
    currentIndex,
    imageSrcs.length
  );
  return (
    <Container>
      {displayedIndexes.map((displayedIndex, idx) => (
        <Image
          key={idx}
          isFocused={displayedIndex === currentIndex}
          src={imageSrcs[displayedIndex]}
          alt={imageSrcs[displayedIndex]}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type TextProps = {
  isFocused: boolean;
};
const Image = styled.img<TextProps>`
  height: 5rem;
  width: 10rem;
  transform: scale(${(p) => (p.isFocused ? 2 : 1)});
`;

export { ImageCarousel };
