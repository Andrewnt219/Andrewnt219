import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { GlobalStyling } from "@src/constants/globalStyles.constants";

/**
 * @returns query is matched
 * @param mediaQuery mediaQuery string, default is mobile divide
 */
export const useMediaQuery = (mediaQuery?: string): boolean => {
  // matches state
  const [matches, setMatches] = useState(false);
  // get mobile breakpoint
  const { breakpoints } = useTheme();
  const defaultBreakpoint = breakpoints[GlobalStyling.DesktopScreenBreakpoint];

  useEffect(() => {
    const mqList = window.matchMedia(
      mediaQuery ?? `screen and (min-width: ${defaultBreakpoint})`
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
  }, [mediaQuery, defaultBreakpoint]);

  return matches;
};
