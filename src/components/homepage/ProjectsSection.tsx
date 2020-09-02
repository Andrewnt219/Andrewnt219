import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import { GlobalNumbers } from "@src/constants/global.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import React, { ReactElement, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";
import { HomeSection } from "./shared/HomeSection";

const SECTION_ID = HomepageSectionIds.Projects;

function ProjectsSection(): ReactElement {
  /* Handle Sidebar active link */
  const [ref, inView] = useInView({
    threshold: GlobalNumbers.HomepageSectionInViewThreshhold,
  });
  const { onSectionSwitch } = useContext(HomepageSections);

  useEffect(() => {
    if (inView) {
      onSectionSwitch(SECTION_ID);
    }
  }, [inView, onSectionSwitch]);

  return (
    <HomeSection heading="Projects" ref={ref} id={SECTION_ID}>
      Project 1
    </HomeSection>
  );
}

export { ProjectsSection };
