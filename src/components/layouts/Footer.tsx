import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MediaIcon, MediaIconProps } from "../footer/MediaIcon";

type Props = ContainerProps & {};

/**
 * @description renders page's footer
 */
function Footer({ height }: Props): ReactElement {
  return (
    <Container height={height}>
      <MediaIcons>{renderMediaIcons()}</MediaIcons>
    </Container>
  );
}

function renderMediaIcons() {
  const mediaIcons: MediaIconProps[] = [
    {
      Icon: FaGithubAlt,
      iconColor: "#6e5494",
      href: "https://github.com/Andrewnt219",
      label: "Link to Github profile",
    },
    {
      Icon: FaFacebookF,
      iconColor: "#3b5998",
      href: "https://www.facebook.com/phong.nguyentuan.108",
      label: "Link to Facebook profile",
    },
    {
      Icon: FaLinkedinIn,
      iconColor: "#0e76a8",
      href: "https://www.linkedin.com/in/andrewnt219/",
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
  height: ${(p) => p.height};
  transition-property: background-color;
  ${tw`bg-lprimary sticky bottom-0 left-0 w-full duration-theme ease-in-out `};
`;

type MediaIconsProps = {};
const MediaIcons = styled.ul<MediaIconsProps>`
  ${tw`flex  space-x-3`}
`;

export { Footer };
