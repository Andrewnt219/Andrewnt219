import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { HomeSection } from "../shared/HomeSection";
import { Roadmap } from "./components/Roadmap";

function AboutSection(): ReactElement {
  return (
    <CustomHomeSection
      heading="About me"
      subHeading="Haaave you met Andrew?"
      id={HomepageSectionIds.About}
    >
      <Roadmap />
      <a href="/">Let&apos;s chat</a>
      <a href="/">Wait, there&apos;s more</a>
    </CustomHomeSection>
  );
}

type CustomHomeSectionProps = {};
const CustomHomeSection = styled(HomeSection)<CustomHomeSectionProps>``;

export { AboutSection };
