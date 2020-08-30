import { HeadTitle } from "@src/components/head/HeadTitle";
import { AboutSection } from "@src/components/homepage/AboutSection";
import { ContactSection } from "@src/components/homepage/ContactSection";
import { HeroSection } from "@src/components/homepage/HeroSection";
import { ProjectsSection } from "@src/components/homepage/ProjectsSection";
import { Sidebar } from "@src/components/homepage/Sidebar";
import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import {
  HomepageSections,
  HomepageSection,
  HomepageSectionSwitchHandler,
} from "@src/contexts/HomepageSections.context";
import { useState } from "react";

export default function Home() {
  //* Should to be null on first page load
  const [inViewSection, setInViewSection] = useState<null | HomepageSection>(
    null
  );

  const onSectionSwitch: HomepageSectionSwitchHandler = (section) => {
    setInViewSection(section);
  };

  return (
    <HomepageSections.Provider value={{ inViewSection, onSectionSwitch }}>
      <HeadTitle title="Portfolio" />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      {/* //* Need to be !== null to prevent disply on initial page load*/}
      {inViewSection && inViewSection !== HomepageSectionIds.Hero && (
        <Sidebar inViewSection={inViewSection} />
      )}
    </HomepageSections.Provider>
  );
}
