import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { HomePageProject } from "@src/data/homepageProjects.data";
import { filePathToName } from "@src/helpers/utils.helpers";
import { ReactElement, useContext } from "react";
import LazyLoad from "react-lazyload";
import tw, { css, styled, theme } from "twin.macro";
import { Button } from "../Button";
import { StackInfo } from "./StackInfo";
import NextLink from "next/link";
import { ResponsiveImage } from "../ResponsiveImage";

type Props = {
  thumbnailSizes: string;
  data: HomePageProject;
};

function ProjectCard({ thumbnailSizes, data }: Props): ReactElement {
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
    <Container isDarkMode={isDarkMode}>
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

        <StacksInfo>
          {stacksInfo.map((stack) => {
            return (
              <li key={stack.name}>
                <CustomStackInfo data={stack} />
              </li>
            );
          })}
        </StacksInfo>
      </InfoContainer>
    </Container>
  );
}

type ContainerProps = {
  isDarkMode: boolean;
};
const Container = styled.div<ContainerProps>`
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
  ${tw`flex flex-col`}
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 1em;
  grid-template-areas:
    "title        links"
    "description  links"
    "stacks       links";
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

type StacksInfoProps = {};
const StacksInfo = styled.ul<StacksInfoProps>`
  grid-area: stacks;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const CustomStackInfo = styled(StackInfo)``;

export { ProjectCard };
