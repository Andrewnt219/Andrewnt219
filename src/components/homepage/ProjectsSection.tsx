import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";

import { HomeSection } from "./shared/HomeSection";

function ProjectsSection(): ReactElement {
  return (
    <HomeSection
      heading="Projects"
      subHeading="Selected projects"
      id={HomepageSectionIds.Projects}
    >
      Projects
    </HomeSection>
  );
}

export { ProjectsSection };
