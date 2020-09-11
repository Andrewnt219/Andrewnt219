import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";

import { HomeSection } from "../shared/HomeSection";
import { LoggingOff } from "./components/LoggingOff";
import { Roadmap } from "./components/Roadmap";

function AboutSection(): ReactElement {
  return (
    <HomeSection
      heading="About me"
      subHeading="Haaave you met Andrew?"
      id={HomepageSectionIds.About}
    >
      <Roadmap />
      <LoggingOff />
      <a href="/">Let&apos;s chat</a>
      <a href="/">Wait, there&apos;s more</a>
    </HomeSection>
  );
}

export { AboutSection };
