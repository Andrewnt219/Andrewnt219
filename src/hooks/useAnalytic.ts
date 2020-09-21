import { useCallback } from "react";
import ReactGA from "react-ga";

type Event = {
  action: string;
  category: string;
  label?: string;
};

export const useAnalytics = () => {
  const init = useCallback((trackingId: string) => {
    ReactGA.initialize(trackingId, { debug: true });
  }, []);

  const trackPageViewed = useCallback((path?: string) => {
    if (path) {
      return ReactGA.pageview(path);
    }
    return ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const trackEvent = useCallback((params: Event) => {
    ReactGA.event(params);
  }, []);

  return {
    init,
    trackPageViewed,
    trackEvent,
  };
};
