import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSidebarActive = (id: HomepageSectionIds) => {
  // NOTE for some reason, any number other than **0.2** breaks inView
  const [ref, inView] = useInView({ threshold: 0.2 });
  const { onSectionSwitch } = useContext(HomepageSections);

  // NOTE useEffect to only update state after HomeSection has updated
  useEffect(() => {
    if (inView) {
      onSectionSwitch(id);
    }
  }, [inView, onSectionSwitch, id]);

  return ref;
};
