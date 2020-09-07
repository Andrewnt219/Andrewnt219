import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { homepageProjectsData } from "@src/data/homepageProjects.data";
import React, { ReactElement } from "react";
import { HomeSection } from "./shared/HomeSection";
import LazyLoad from "react-lazyload";
import { useTheme } from "styled-components";
import { GlobalStyling } from "@src/constants/global.constants";
import { styled } from "twin.macro";
import { ProjectCard } from "../ui/homepage/ProjectCard";

/* SECTION ProjectsSection */
function ProjectsSection(): ReactElement {
  /* ANCHOR sizing project card's thumbnail */
  const { breakpoints } = useTheme();
  const thumbnailSizes = `(min-width: ${
    breakpoints[GlobalStyling.DesktopBreakpoint]
  }): 40vw, 85vw`;

  return (
    <HomeSection
      heading="Projects"
      subHeading="Selected"
      id={HomepageSectionIds.Projects}
    >
      <ProjectCards>
        {homepageProjectsData.map((project) => (
          <li key={project.title}>
            <LazyLoad>
              <ProjectCard data={project} thumbnailSizes={thumbnailSizes} />
            </LazyLoad>
          </li>
        ))}
      </ProjectCards>
    </HomeSection>
  );
}

type ProjectCardsProps = {};
const ProjectCards = styled.ul<ProjectCardsProps>`
  display: grid;
  gap: 1em;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { ProjectsSection };
