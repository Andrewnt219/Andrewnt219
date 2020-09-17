import { Button } from "@src/components/ui/Button";

import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";

import { HomeSection } from "../shared/HomeSection";
import { LoggingOff } from "./components/LoggingOff";
import { PopupVideo } from "./components/PopupVideo";
import { Roadmap } from "./components/Roadmap";

function AboutSection(): ReactElement {
  /* ANCHOR dary video */
  const [showVideo, setShowVideo] = useState(false);

  const videoEndedHandler = () => {
    setShowVideo(false);
  };

  return (
    <>
      <CustomHomeSection
        heading="About me"
        subHeading="Haaave you met Andrew?"
        id={HomepageSectionIds.About}
      >
        <Roadmap />
        <LoggingOff />
        <ButtonContainer>
          <li>
            <Button
              primary
              anchorProps={{ href: `#${HomepageSectionIds.Contact}` }}
            >
              Let&apos;s chat
            </Button>
          </li>
          <li>
            <CustomButton onClick={() => setShowVideo(true)}>
              Wait, there&apos;s more
            </CustomButton>
          </li>
        </ButtonContainer>
      </CustomHomeSection>
      {showVideo && (
        <PopupVideo
          mp4Src="/videos/dary.mp4"
          videoEndedHandler={videoEndedHandler}
          width={1920}
          height={1080}
        />
      )}
    </>
  );
}

type CustomHomeSectionProps = {};
const CustomHomeSection = styled(HomeSection)<CustomHomeSectionProps>`
  & > .lazyload-wrapper > *:nth-last-child(2) {
    margin-bottom: 0;
  }
`;

type ButtonContainerProps = {};
const ButtonContainer = styled.ul<ButtonContainerProps>`
  ${tw`flex flex-col items-center space-y-5`}
  margin-top: 3em;

  & > li {
    width: 100%;
  }

  a,
  button {
    display: block;
    margin: auto;
  }
`;

const CustomButton = styled(Button).attrs({ secondary: true })`
  padding: 0;
  font-size: 0.7em;
`;

export { AboutSection };
