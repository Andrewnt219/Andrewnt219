import { useEffect } from "react";

/**
 * @description subscribe listener to media query
 * @param mediaQuery mediaQuery string
 * @param handler handler involed on query matched
 */
export const useMediaQuery = (
  mediaQuery: string,
  handler: (e: MediaQueryListEvent) => void
): void => {
  useEffect(() => {
    const mqList = window.matchMedia(mediaQuery);
    mqList.addEventListener("change", handler);

    return () => {
      mqList.removeEventListener("change", handler);
    };
  }, [mediaQuery, handler]);
};
