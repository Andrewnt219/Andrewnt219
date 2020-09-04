import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import debounce from "lodash/debounce";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Return = [(node?: Element | null | undefined) => void, boolean];

export const useSidebarActive = (id: HomepageSectionIds): Return => {
  /* SECTION observer */
  const [clientHeight, setClientHeight] = useState<number>(0);

  // NOTE Any numbers other than 0.5 **WILL NOT** work correctly
  const observerMargin = Math.floor(clientHeight * 0.5);

  // NOTE cannot put -${} because it is string & number => --1 won't be 1
  // With this config, intersect when ref hit right at the middle of the screen
  const [ref, inView] = useInView({
    rootMargin: `${
      (clientHeight % 2 === 0 ? observerMargin - 1 : observerMargin) * -1
    }px 0px ${observerMargin * -1}px 0px`,
  });

  /*  config observer */
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
  /* !SECTION observer */

  /* SECTION Sidebar context */
  const { onSectionSwitch } = useContext(HomepageSections);

  // NOTE useEffect to only update state after HomeSection has updated
  useEffect(() => {
    if (inView) {
      onSectionSwitch(id);
    }
  }, [inView, onSectionSwitch, id]);
  /* !SECTION Sidebar context */

  return [ref, inView];
};
