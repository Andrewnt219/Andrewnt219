import { useCallback, useEffect, useState } from "react";

type Return = {
  currentIndex: number;
  goToNextItem: () => void;
  goToPreviousItem: () => void;
  goToSelectedItem: (selectedIndex: number) => void;
};

export const useCarousel = (
  intervalInMs: number,
  numberOfItems: number
): Return => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Controllers */
  const nextIndex = currentIndex < numberOfItems - 1 ? currentIndex + 1 : 0;
  const previousIndex =
    currentIndex === 0 ? numberOfItems - 1 : currentIndex - 1;

  const goToNextItem = useCallback(() => setCurrentIndex(nextIndex), [
    nextIndex,
  ]);
  const goToPreviousItem = useCallback(() => setCurrentIndex(previousIndex), [
    previousIndex,
  ]);
  const goToSelectedItem = useCallback(
    (selectedIndex: number) => setCurrentIndex(selectedIndex),
    []
  );

  /* Autoplay */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, intervalInMs);

    return () => {
      clearTimeout(timerId);
    };
  }, [nextIndex, intervalInMs]);

  return { currentIndex, goToNextItem, goToPreviousItem, goToSelectedItem };
};
