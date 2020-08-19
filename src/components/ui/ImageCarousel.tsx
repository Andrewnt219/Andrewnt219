import { useCarousel } from "@src/hooks";
import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {};

function ImageCarousel({}: Props): ReactElement {
  const { currentIndex } = useCarousel(5000, 6);
  const items = ["0", "1", "2", "3", "4", "5"];

  const displayedIndex = getIndexesInRange(3, currentIndex, items.length - 1);
  return (
    <Container>
      {displayedIndex.map((displayedIndex, idx) => (
        <Text key={idx} isFocused={displayedIndex === currentIndex}>
          {items[displayedIndex]}
        </Text>
      ))}
    </Container>
  );
}

const getIndexesInRange = (
  range: number,
  currentIndex: number,
  lastIndex: number
): number[] => {
  const previousIndexes: number[] = [];
  const nextIndexes: number[] = [];

  for (let i = range; i > 0; i--) {
    // Loop back if < 0
    const previousIndex =
      currentIndex - i < 0
        ? lastIndex - Math.abs(currentIndex - i) + 1
        : currentIndex - i;

    previousIndexes.unshift(previousIndex);
  }

  for (let i = 1; i <= range; i++) {
    // Loop forward if > last index
    const nextIndex =
      currentIndex + i > lastIndex
        ? 0 + Math.abs(currentIndex + i - lastIndex) - 1
        : currentIndex + i;

    nextIndexes.push(nextIndex);
  }
  return [...previousIndexes.reverse(), currentIndex, ...nextIndexes];
};

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type TextProps = {
  isFocused: boolean;
};
const Text = styled.div<TextProps>`
  font-weight: ${(p) => p.isFocused && "bold"};
`;

export { ImageCarousel };
