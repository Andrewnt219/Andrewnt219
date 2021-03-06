import { useEffect, useState } from "react";
import { useTheme, DefaultTheme } from "styled-components";
import { GlobalStyling } from "@src/constants/global.constants";

/**
 * @returns query is matched
 * @param breakpoint mediaQuery string, default is appbar breakpoint
 */
export const useMediaQuery = (
  breakpoint?: keyof DefaultTheme["breakpoints"],
  orientation?: "landscape" | "portrait"
): boolean => {
  // matches state
  const [matches, setMatches] = useState(false);
  // get mobile breakpoint
  const { breakpoints } = useTheme();

  useEffect(() => {
    const defaultBreakpoint = GlobalStyling.AppBarBreakpoint;

    const sizeQuery = `screen and (min-width: ${
      breakpoints[breakpoint ?? defaultBreakpoint]
    })`;
    const orientationQuery = orientation
      ? `, (orientation: ${orientation})`
      : "";
    const mqList = window.matchMedia(sizeQuery + orientationQuery);

    // if query matches initially
    if (mqList.matches) {
      setMatches(true);
    }
    // Subscribe for later changes
    mqList.onchange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };
  }, [breakpoint, breakpoints, orientation]);

  return matches;
};
