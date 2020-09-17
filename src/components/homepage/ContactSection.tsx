import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";
import { Email } from "../ui/Email";
import { HomeSection } from "./shared/HomeSection";
import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { MediaIcon, MediaIconProps } from "../footer/MediaIcon";
import { GlobalStyling } from "@src/constants/global.constants";
import { AnimatePresence, motion, Variants } from "framer-motion";

function ContactSection(): ReactElement {
  const [showVideo, setShowVideo] = useState<boolean>(false);

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
          <CvButton href="/Andrew Nguyen_CV.pdf" download>
            Download CV
          </CvButton>
        </li>
      </Grid>
      <Grid>{renderMediaIcons()}</Grid>
      <Compliment onClick={() => setShowVideo(true)}>
        Send a compliment
      </Compliment>
      <AnimatePresence>
        {showVideo && (
          <VideoContainer
            variants={videoContainerVariants}
            initial="hidden"
            exit="exit"
            animate="visible"
          >
            <Video
              muted
              autoPlay
              width={460}
              height={258}
              onEnded={() => setShowVideo(false)}
            >
              <source src="/videos/kindness.mp4" type="video/mp4" />
              Sorry, your browser doesn&abpos;t support embedded videos.
            </Video>
            <CloseVideoButton onClick={() => setShowVideo(false)}>
              Close
            </CloseVideoButton>
          </VideoContainer>
        )}
      </AnimatePresence>
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

const CustomHomeSection = styled(HomeSection)`
  ${tw`relative`}
`;

type GridProps = {};
const Grid = styled.ul<GridProps>`
  display: grid;
  gap: 1em;
  margin-bottom: 1em;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
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
  line-height: 3;

  transition: border-color 300ms ease;

  :hover,
  :focus {
    ${tw`border-secondary`}
    text-decoration: underline;
  }
`;

type ComplimentProps = {};
const Compliment = styled.button<ComplimentProps>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  font-size: 0.5em;

  :hover,
  :focus {
    outline: none;
    text-decoration: underline;
  }
`;

const videoContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    scale: 0,
    x: "100vw",
    y: "100vh",
    transition: {
      duration: 0.5,
    },
  },
};

type VideoContainerProps = {};
const VideoContainer = styled(motion.div)<VideoContainerProps>`
  ${tw`z-50`}

  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--primary-color-rgb), 0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type VideoProps = {};
const Video = styled.video<VideoProps>`
  ${tw`rounded`}
  width: 90vw;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    width: 60vw;
  }
`;

type CloseVideoButtonProps = {};
const CloseVideoButton = styled.button<CloseVideoButtonProps>`
  ${tw`uppercase focus:outline-none mt-5 hocus:underline`}
`;

export { ContactSection };
