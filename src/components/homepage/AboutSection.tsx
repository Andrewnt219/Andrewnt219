import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";
import { HomeSection } from "./shared/HomeSection";

function AboutSection(): ReactElement {
  return (
    <HomeSection heading="About me" id={HomepageSectionIds.About}>
      About
    </HomeSection>
  );
}

export { AboutSection };
