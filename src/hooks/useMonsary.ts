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
  gridAutoRow: number,
  gridRowGap?: number,
  listener?: (span: number) => void
): Return<T> => {
  const containerRef = useRef<T | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [span, setSpan] = useState<null | number>(null);

  useEffect(() => {
    // Calculate row span of this card
    const calculateSpanArea = () => {
      const container = containerRef.current;

      if (container) {
        const rowGap = gridRowGap ?? 0;
        const numberOfRowSpanned = Math.ceil(
          (container.clientHeight + rowGap) / (gridAutoRow + rowGap)
        );

        // update span and invoke listener if any
        setSpan(numberOfRowSpanned);

        if (listener) {
          listener(numberOfRowSpanned);
        }
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
  }, [gridAutoRow, gridRowGap, listener]);

  return [containerRef, imageRef, span];
};
