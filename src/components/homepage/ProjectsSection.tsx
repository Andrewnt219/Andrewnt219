import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { homepageProjectsData } from "@src/data/homepageProjects.data";
import React, { ReactElement, useContext } from "react";
import { HomeSection } from "./shared/HomeSection";
import LazyLoad from "react-lazyload";
import { useTheme } from "styled-components";
import { GlobalStyling } from "@src/constants/global.constants";
import tw, { css, styled, theme } from "twin.macro";
import { HomePageProject } from "@src/data/homepageProjects.data";
import NextLink from "next/link";
import { ResponsiveImage } from "../ui/ResponsiveImage";
import { Button } from "../ui/Button";
import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { filePathToName } from "@src/helpers/utils.helpers";

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
    grid-template-columns: 1fr 1fr;
    gap: 1vw;
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
    stacksInfo,
    links: { github, demo, readMore },
    imageSrc,
  } = data;

  /* Change style base on light/dark */
  const { mode } = useContext(ColorThemeContext);
  const isDarkMode = mode === "dark-mode";

  return (
    <ProjectCardContainer isDarkMode={isDarkMode}>
      <LazyLoad>
        <Thumbnail
          path={imageSrc}
          sizes={thumbnailSizes}
          alt={filePathToName(imageSrc)}
          config={{ isPng: true, enablePlaceholder: false }}
        />
      </LazyLoad>

      <InfoContainer>
        <Title>{title}</Title>
        <Description>{shortDescription}</Description>

        <Links>
          <li style={{ gridArea: "demo" }}>
            <CustomPrimaryButton
              anchorProps={{
                href: demo,
                target: "_blank",
                rel: "noopener noreferrer",
              }}
            >
              Demo
            </CustomPrimaryButton>
          </li>

          <li style={{ gridArea: "readMore" }}>
            <NextLink passHref href={readMore}>
              <CustomSecondaryButton
                aria-label={`Read more about project ${title}`}
                anchorProps
              >
                Read More
              </CustomSecondaryButton>
            </NextLink>
          </li>

          <li style={{ gridArea: "github" }}>
            <CustomSecondaryButton
              aria-label={`See ${title}'s source code`}
              anchorProps={{
                href: github,
                target: "_blank",
                rel: "noopener noreferrer",
              }}
            >
              GitHub
            </CustomSecondaryButton>
          </li>
        </Links>

        <StackIcons>
          {stacksInfo.map(({ name, imageSource }) => {
            return (
              <li key={name}>
                {/* TODO make a chip: text on the left, icon in a rounded area on the right */}
                <StackContainer>
                  <StackName>{name}</StackName>
                  <StackIcon
                    isDarkMode={isDarkMode}
                    src={imageSource}
                    alt={name}
                    title={name}
                  />
                </StackContainer>
              </li>
            );
          })}
        </StackIcons>
      </InfoContainer>
    </ProjectCardContainer>
  );
}

type ProjectCardContainerProps = {
  isDarkMode: boolean;
};
const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  ${tw`text-textColor  border-2 border-borderColor p-10 rounded`}

  display: grid;
  gap: 1em;

  transition: background-color ${theme`transitionDuration.theme`}
      ${theme`transitionTimingFunction.theme`},
    border ${theme`transitionDuration.200`} ease;

  :hover,
  :focus-within {
    ${tw`border-accent`}
  }

  ${(p) =>
    p.isDarkMode
      ? css`
          ${tw`bg-lprimary`}
        `
      : css`
          ${tw`bg-primary`}
        `}
`;

type InfoContainerProps = {};
const InfoContainer = styled.div<InfoContainerProps>`
  ${tw`flex flex-col`}
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 1em;
  grid-template-areas:
    "title        links"
    "description  links"
    "stacks       links";
`;

type ImageProps = {};
const Thumbnail = styled(ResponsiveImage)<ImageProps>`
  &,
  img {
    --aspect-ratio: 320 / 224;
    width: 100%;
    height: calc(100% / (var(--aspect-ratio)));
  }
`;

type TitleProps = {};
const Title = styled.h4<TitleProps>`
  ${tw`font-hBold`}
  font-size: 2em;
  grid-area: title;
`;

type DescriptionProps = {};
const Description = styled.p<DescriptionProps>`
  grid-area: description;
`;

type LinksProps = {};
const Links = styled.ul<LinksProps>`
  grid-area: links;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-self: flex-end;
  grid-template-areas:
    "demo     demo"
    "readMore github";

  & > li {
    display: flex;
    place-items: center;
  }
`;

type CustomPrimaryButtonProps = {};
const CustomPrimaryButton = styled(Button).attrs({ primary: true })<
  CustomPrimaryButtonProps
>`
  font-size: larger;
  padding: 0.5em 1em;
  width: 100%;
  text-align: center;
`;

type CustomSecondaryButtonProps = {};
const CustomSecondaryButton = styled(Button).attrs({ secondary: true })<
  CustomSecondaryButtonProps
>`
  font-size: smaller;
  padding: 0.5em 0;
`;

type StackIconsProps = {};
const StackIcons = styled.ul<StackIconsProps>`
  display: flex;
  flex: 1;
  align-items: flex-end;
  grid-area: stacks;
`;

type StackContainerProps = {};
const StackContainer = styled.div<StackContainerProps>``;

type StackNameProps = {};
const StackName = styled.span<StackNameProps>`
  font-size: 0.75em;
`;

type StackIconProps = {
  isDarkMode: boolean;
};
const StackIcon = styled.img<StackIconProps>`
  width: 2em;

  ${(p) =>
    p.isDarkMode &&
    css`
      filter: saturate(300%);
    `}
`;

/* !SECTION ProjectCard */
