import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { stacksData } from "@src/data/homepageProjects.data";
import React, { ReactElement } from "react";

import { HomeSection } from "./shared/HomeSection";

function ProjectsSection(): ReactElement {
  return (
    <HomeSection
      heading="Projects"
      subHeading="Selected"
      id={HomepageSectionIds.Projects}
    >
      Projects
    </HomeSection>
  );
}

export { ProjectsSection };
