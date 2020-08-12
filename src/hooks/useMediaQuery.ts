import { useEffect, useState } from "react";

/**
 * @returns query is matched
 * @param mediaQuery mediaQuery string
 */
export const useMediaQuery = (mediaQuery: string): boolean => {
  // matches state
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mqList = window.matchMedia(mediaQuery);

    // if query matches initially
    if (mqList.matches) {
      setMatches(true);
    }
    // Subscribe for later changes
    const handler = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };
    mqList.addEventListener("change", handler);
    return () => {
      mqList.removeEventListener("change", handler);
    };
  }, [mediaQuery]);

  return matches;
};
