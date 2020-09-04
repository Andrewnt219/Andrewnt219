import {
  HomepageSection,
  HomepageSectionIds,
} from "@src/constants/homepage.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import debounce from "lodash/debounce";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useSidebarActive = (id: HomepageSectionIds) => {
  const [clientHeight, setClientHeight] = useState<number>(0);
  const observerMargin = Math.floor(clientHeight / 2);

  useEffect(() => {
    setClientHeight(window.innerHeight);

    const resizeHandler = debounce(
      () => setClientHeight(window.innerHeight),
      300
    );
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // NOTE for some reason, any number other than **0.2** breaks inView
  const [ref, inView] = useInView({
    rootMargin: `-${
      clientHeight % 2 === 0 ? observerMargin - 1 : observerMargin
    }px 0px -${observerMargin}px 0px`,
  });
  const { onSectionSwitch } = useContext(HomepageSections);

  // NOTE useEffect to only update state after HomeSection has updated
  useEffect(() => {
    if (inView) {
      onSectionSwitch(id);
    }
  }, [inView, onSectionSwitch, id]);

  return ref;
};
