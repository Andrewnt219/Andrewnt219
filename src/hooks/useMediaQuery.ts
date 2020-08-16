import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

/**
 * @returns query is matched
 * @param mediaQuery mediaQuery string, default is mobile divide
 */
export const useMediaQuery = (mediaQuery?: string): boolean => {
  // matches state
  const [matches, setMatches] = useState(false);
  // get mobile breakpoint
  const {
    breakpoints: { md },
  } = useTheme();

  useEffect(() => {
    const mqList = window.matchMedia(
      mediaQuery ?? `screen and (min-width: ${md})`
    );

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
  }, [mediaQuery, md]);

  return matches;
};
