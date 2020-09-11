import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { HomeSection } from "../shared/HomeSection";
import { LoggingOff } from "./components/LoggingOff";
import { Roadmap } from "./components/Roadmap";

function AboutSection(): ReactElement {
  return (
    <CustomHomeSection
      heading="About me"
      subHeading="Haaave you met Andrew?"
      id={HomepageSectionIds.About}
    >
      <Roadmap />
      <LoggingOff />
      <a href="/">Let&apos;s chat</a>
      <a href="/">Wait, there&apos;s more</a>
    </CustomHomeSection>
  );
}

type CustomHomeSectionProps = {};
const CustomHomeSection = styled(HomeSection)<CustomHomeSectionProps>`
  main {
    & > *:not(:last-child) {
      /* larger (double) than the number of margin-bottom between each paragraphs of children*/
      ${tw`mb-16`}
    }
  }
`;

export { AboutSection };
