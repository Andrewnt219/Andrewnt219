import { HomePageProject } from "@src/data/homepageProjects.data";
import { filePathToName } from "@src/helpers/utils.helpers";
import { ReactElement } from "react";

import tw, { styled } from "twin.macro";
import { Button } from "../Button";
import { StackInfo } from "./StackInfo";

import { ResponsiveImage } from "../ResponsiveImage";
import { Card } from "../Card";
import { GlobalStyling } from "@src/constants/global.constants";

type Props = {
  thumbnailSizes: string;
  data: HomePageProject;
  className?: string;
};

function ProjectCard({ className, thumbnailSizes, data }: Props): ReactElement {
  const {
    title,
    shortDescription,
    additionalNote,
    stacksInfo,
    links: { github, demo, readMore },
    imageSrc,
  } = data;

  return (
    <CustomCard className={className}>
      <Thumbnail
        path={imageSrc}
        sizes={thumbnailSizes}
        alt={filePathToName(imageSrc)}
        config={{ isPng: true, enablePlaceholder: true }}
      />

      <InfoContainer>
        <Title>{title}</Title>

        <Description>
          {shortDescription}&nbsp;<Note>{additionalNote}</Note>
        </Description>

        <StacksInfo>
          {stacksInfo.map((stack) => {
            return (
              <li key={stack.name}>
                <CustomStackInfo data={stack} />
              </li>
            );
          })}
        </StacksInfo>

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
            <CustomSecondaryButton
              aria-label={`Overview of project ${title}`}
              anchorProps={{
                href: readMore,
                target: "_blank",
                rel: "noopener noreferrer",
              }}
            >
              Summary
            </CustomSecondaryButton>
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
      </InfoContainer>
    </CustomCard>
  );
}

type ContainerProps = {};
const CustomCard = styled(Card)<ContainerProps>`
  display: grid;
  gap: 1em;
`;

type ImageProps = {};
const Thumbnail = styled(ResponsiveImage)<ImageProps>`
  &,
  img {
    width: 100%;
    height: 100%;
  }
`;

type InfoContainerProps = {};
const InfoContainer = styled.div<InfoContainerProps>`
  display: grid;
  row-gap: 1em;
  grid-template-areas:
    "title"
    "description"
    "stacks"
    "links";

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    grid-template-columns: 2fr 1fr;
    column-gap: 1em;
    align-items: center;

    grid-template-areas:
      "title        links"
      "description  description"
      "stacks       stacks";
  }
`;

type TitleProps = {};
const Title = styled.h3<TitleProps>`
  ${tw`font-hBold`}
  font-size: 2em;
  grid-area: title;
`;

type DescriptionProps = {};
const Description = styled.p<DescriptionProps>`
  grid-area: description;
`;

type NoteProps = {};
const Note = styled.span<NoteProps>`
  ${tw`text-accent`}
`;

type LinksProps = {};
const Links = styled.ul<LinksProps>`
  grid-area: links;

  display: grid;
  gap: 1em;
  align-items: center;
  align-content: flex-start;
  justify-content: space-between;
  grid-template-areas:
    "demo     demo"
    "readMore github";

  & > li {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    justify-self: flex-end;
    justify-content: initial;
    grid-template-columns: repeat(2, max-content);
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

type StacksInfoProps = {};
const StacksInfo = styled.ul<StacksInfoProps>`
  /* Negative left margin is based on StackInfo individual padding */
  ${tw`-ml-2`}

  grid-area: stacks;

  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const CustomStackInfo = styled(StackInfo)``;

export { ProjectCard };
