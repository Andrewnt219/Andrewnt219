import { MutableRefObject, useEffect, useRef, useState } from "react";

type Return<T> = [
  MutableRefObject<T | null>,
  MutableRefObject<HTMLImageElement | null>,
  number | null
];

/**
 * @description calculating number of row that the grid-child ref spans inside monsary grid
 * @note requires grid-auto-row and gap on grid parent
 */
export const useMonsary = <T extends HTMLElement>(
  gridAutoRow: number
): Return<T> => {
  const containerRef = useRef<T | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [span, setSpan] = useState<null | number>(null);

  useEffect(() => {
    // Calculate row span of this card
    const calculateSpanArea = () => {
      const container = containerRef.current;

      if (container) {
        const numberOfRowSpanned = Math.ceil(
          container.clientHeight / gridAutoRow
        );
        setSpan(numberOfRowSpanned);
      }
    };

    // trigger after the thumbnail has loaded
    const image = imageRef.current;
    image?.addEventListener("load", calculateSpanArea);

    // recalculate on resize
    window.addEventListener("resize", calculateSpanArea);

    return () => {
      image?.removeEventListener("load", calculateSpanArea);
      window.removeEventListener("resize", calculateSpanArea);
    };
  }, [gridAutoRow]);

  return [containerRef, imageRef, span];
};
