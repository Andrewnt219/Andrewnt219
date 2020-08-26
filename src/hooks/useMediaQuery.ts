import { useEffect, useState } from "react";
import { useTheme, DefaultTheme } from "styled-components";
import { GlobalStyling } from "@src/constants/globalStyles.constants";

/**
 * @returns query is matched
 * @param breakpoint mediaQuery string, default is mobile divide
 */
export const useMediaQuery = (
  breakpoint?: keyof DefaultTheme["breakpoints"]
): boolean => {
  // matches state
  const [matches, setMatches] = useState(false);
  // get mobile breakpoint
  const { breakpoints } = useTheme();

  useEffect(() => {
    const defaultBreakpoint = GlobalStyling.DesktopScreenBreakpoint;
    const mqList = window.matchMedia(
      `screen and (min-width: ${breakpoints[breakpoint ?? defaultBreakpoint]})`
    );
    console.log({ mediaQuery: breakpoint });

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
  }, [breakpoint, breakpoints]);

  return matches;
};
