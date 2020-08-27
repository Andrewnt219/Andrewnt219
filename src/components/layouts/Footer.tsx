import React, { ReactElement } from "react";
import tw, { css, styled } from "twin.macro";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { MediaIcon, MediaIconProps } from "../footer/MediaIcon";
import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { Logo } from "../ui/Logo";
import { useMediaQuery } from "@src/hooks";
import { GlobalGridAreas } from "@src/constants/globalGridAreas.constants";
import { spinZ } from "@src/styles/animation/spin.animation";
import { GlobalStyling } from "@src/constants/globalStyles.constants";

enum GridArea {
  Medias = "medias",
  Email = "email",
  Text = "text",
}

type Props = ContainerProps & {};
/**
 * @description renders page's footer
 */
function Footer({ height }: Props): ReactElement {
  const enableAnimation = useMediaQuery("xl");

  return (
    <Container height={height}>
      <Logo size="20rem" animated={enableAnimation} />

      <MediaIcons>{renderMediaIcons()}</MediaIcons>

      <Email href={`mailto:${PersonalInfo.Email}`}>{PersonalInfo.Email}</Email>

      <Text animated={enableAnimation}>
        Made by Andrew Nguyen with&nbsp;
        <FaReact aria-label="react.js" role="img" />
      </Text>
    </Container>
  );
}

function renderMediaIcons() {
  const mediaIcons: MediaIconProps[] = [
    {
      Icon: FaGithubAlt,
      iconColor: "#6e5494",
      href: PersonalInfo.GitHub,
      label: "Link to Github profile",
    },
    {
      Icon: FaFacebookF,
      iconColor: "#3b5998",
      href: PersonalInfo.Facebook,
      label: "Link to Facebook profile",
    },
    {
      Icon: FaLinkedinIn,
      iconColor: "#0e76a8",
      href: PersonalInfo.LinkedIn,
      label: "Link to LinkedIn profile",
    },
  ];

  return mediaIcons.map((mediaIconProps, index) => (
    <li key={index}>
      <MediaIcon {...mediaIconProps} />
    </li>
  ));
}

type ContainerProps = {
  height: string;
};
const Container = styled.footer<ContainerProps>`
  ${tw`bg-lprimary text-xl sticky bottom-0 left-0 w-full duration-theme ease-theme py-5`};
  height: ${(p) => p.height};
  transition-property: background-color;

  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 1rem;
  grid-template-areas: ${`
    "${GlobalGridAreas.Logo}"
    "${GridArea.Medias}"
    "${GridArea.Email}"
    "${GridArea.Text}"
  `};

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopScreenBreakpoint]}) {
    grid-template-areas: ${`
    "${GlobalGridAreas.Logo} ${GridArea.Medias}"
    "${GlobalGridAreas.Logo} ${GridArea.Email}"
    "${GridArea.Text} ${GridArea.Text}"
    `};
  }
`;

type MediaIconsProps = {};
const MediaIcons = styled.ul<MediaIconsProps>`
  ${tw`flex  space-x-5`}
  grid-area: ${GridArea.Medias};
`;

type EmailProps = {};
const Email = styled.a<EmailProps>`
  ${tw`text-accent underline`}
  grid-area: ${GridArea.Email};

  font-size: larger;
`;

type TextProps = {
  animated?: boolean;
};
const Text = styled.p<TextProps>`
  grid-area: ${GridArea.Text};
  ${tw`flex justify-center items-center `}
  align-self: flex-end;

  svg {
    font-size: larger;
    fill: var(--accent-color);
    ${(p) =>
      p.animated &&
      css`
        animation: ${spinZ} 10s linear infinite;
      `}
  }
`;

export { Footer };
