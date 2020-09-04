import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { homepageProjectsData } from "@src/data/homepageProjects.data";
import React, { ReactElement } from "react";
import { ProjectCard } from "../ui/ProjectCard";

import { HomeSection } from "./shared/HomeSection";
import LazyLoad from "react-lazyload";

function ProjectsSection(): ReactElement {
  return (
    <HomeSection
      heading="Projects"
      subHeading="Selected"
      id={HomepageSectionIds.Projects}
    >
      {homepageProjectsData.map((projectProps) => (
        <LazyLoad key={projectProps.title}>
          <ProjectCard {...projectProps} />
        </LazyLoad>
      ))}
    </HomeSection>
  );
}

export { ProjectsSection };
