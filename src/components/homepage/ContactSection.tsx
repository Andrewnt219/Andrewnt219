import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { Email } from "../ui/Email";
import { HomeSection } from "./shared/HomeSection";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { MediaIcon, MediaIconProps } from "../footer/MediaIcon";
import { GlobalStyling } from "@src/constants/global.constants";

function ContactSection(): ReactElement {
  return (
    <CustomHomeSection
      heading="Contacts"
      subHeading="Interested in a talk?"
      id={HomepageSectionIds.Contact}
    >
      <Grid>
        <li>
          <CustomEmail />
        </li>

        <li>
          <CvButton href="/CV.pdf" download>
            Download CV
          </CvButton>
        </li>
      </Grid>
      <Grid>{renderMediaIcons()}</Grid>
    </CustomHomeSection>
  );
}

function renderMediaIcons() {
  const mediaIcons: MediaIconProps[] = [
    {
      Icon: FaGithubAlt,
      iconColor: "#6e5494",
      href: PersonalInfo.GitHub,
      label: "Link to Github profile",
      caption: "See more projects",
    },
    {
      Icon: FaFacebookF,
      iconColor: "#3b5998",
      href: PersonalInfo.Facebook,
      label: "Link to Facebook profile",
      caption: "Outside of work",
    },
    {
      Icon: FaLinkedinIn,
      iconColor: "#0e76a8",
      href: PersonalInfo.LinkedIn,
      label: "Link to LinkedIn profile",
      caption: "Resume alternative",
    },
  ];

  return mediaIcons.map((mediaIconProps, index) => (
    <li key={index}>
      <MediaIcon {...mediaIconProps} />
    </li>
  ));
}

const CustomHomeSection = styled(HomeSection)``;

type GridProps = {};
const Grid = styled.ul<GridProps>`
  display: grid;
  gap: 1em;
  margin-bottom: 1em;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type CustomEmailProps = {};
const CustomEmail = styled(Email)<CustomEmailProps>`
  ${tw`border-2 border-borderColor text-white bg-secondary rounded`}
  line-height: 3;
  width: 100%;

  transition: filter 300ms ease;

  :hover,
  :focus {
    filter: brightness(1.1);
    text-decoration: underline;
    outline: none;
  }
`;

type CvButtonProps = {};
const CvButton = styled.a<CvButtonProps>`
  ${tw`border-2 border-borderColor rounded uppercase flex items-center justify-center`}

  height: 100%;
  width: 100%;

  transition: border-color 300ms ease;

  :hover,
  :focus {
    ${tw`border-secondary`}
    text-decoration: underline;
  }
`;

export { ContactSection };
