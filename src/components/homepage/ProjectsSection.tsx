import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { homepageProjectsData } from "@src/data/homepageProjects.data";
import React, { ReactElement } from "react";
import { HomeSection } from "./shared/HomeSection";
import LazyLoad from "react-lazyload";
import { useTheme } from "styled-components";
import { GlobalStyling } from "@src/constants/global.constants";
import tw, { styled } from "twin.macro";
import { HomePageProject } from "@src/data/homepageProjects.data";
import { Link } from "../navigations/Link";
import { ResponsiveImage } from "../ui/ResponsiveImage";

/* SECTION ProjectsSection */
function ProjectsSection(): ReactElement {
  /* ANCHOR sizing project card's thumbnail */
  const { breakpoints } = useTheme();
  const thumbnailSizes = `(min-width: ${
    breakpoints[GlobalStyling.DesktopBreakpoint]
  }): 20vw, 40vw`;

  return (
    <HomeSection
      heading="Projects"
      subHeading="Selected"
      id={HomepageSectionIds.Projects}
    >
      <ProjectCards>
        {homepageProjectsData.map((projectProps) => (
          <li key={projectProps.title}>
            <LazyLoad>
              <ProjectCard {...projectProps} thumbnailSizes={thumbnailSizes} />
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

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    column-gap: 2vw;
    grid-template-columns: 1fr 1fr;
  }
`;

export { ProjectsSection };
/* !SECTION ProjectsSection */

/* SECTION ProjectCard */
type Props = HomePageProject & {
  thumbnailSizes: string;
};

function ProjectCard({ thumbnailSizes, ...data }: Props): ReactElement {
  const {
    title,
    shortDescription,
    stackIconSources,
    links: { github, demo, readMore },
    imageSrc,
  } = data;

  return (
    <ProjectCardContainer>
      <LazyLoad>
        <Thumbnail
          path={imageSrc}
          sizes={thumbnailSizes}
          alt={filePathToName(imageSrc)}
        />
      </LazyLoad>

      <InfoContainer>
        <Title>{title}</Title>
        <Description>{shortDescription}</Description>

        <Links>
          <li>
            <Link
              href={readMore}
              anchorAttributes={{
                "aria-label": `Read more about project ${title}`,
              }}
            >
              Read More
            </Link>
          </li>

          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>

          <li>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </li>
        </Links>

        <StackIcons>
          {stackIconSources.map((iconSource) => (
            <li key={iconSource}>
              <StackIcon src={iconSource} alt={filePathToName(iconSource)} />
            </li>
          ))}
        </StackIcons>
      </InfoContainer>
    </ProjectCardContainer>
  );
}

function filePathToName(path: string) {
  // NOTE remove anything before the final slash
  //      remove extension
  return path.replace(/^.*[/\\]/, "").replace(/\..*$/, "");
}

type ProjectCardContainerProps = {};
const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  ${tw`text-textColor bg-lprimary border-2 border-borderColor`}

  display: flex;

  & > * {
    flex: 1;
  }

  .lazyload-wrapper {
  }
`;

type InfoContainerProps = {};
const InfoContainer = styled.div<InfoContainerProps>`
  ${tw`flex flex-col p-4`}
`;

type ImageProps = {};
const Thumbnail = styled(ResponsiveImage)<ImageProps>`
  &,
  img {
    width: 100%;
    object-fit: cover;
    height: 30vmax;
  }
`;

type TitleProps = {};
const Title = styled.h4<TitleProps>`
  ${tw`font-hBold`}

  font-size: 2.5em;
`;

type DescriptionProps = {};
const Description = styled.p<DescriptionProps>``;

type LinksProps = {};
const Links = styled.ul<LinksProps>`
  ${tw`flex`}
`;

type StackIconsProps = {};
const StackIcons = styled.ul<StackIconsProps>`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;

type StackIconProps = {};
const StackIcon = styled.img<StackIconProps>`
  width: 2em;
`;

/* !SECTION ProjectCard */
