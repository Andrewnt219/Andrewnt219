import { HeadTitle } from "@src/components/head/HeadTitle";
import { AboutSection } from "@src/components/homepage/AboutSection";
import { ContactSection } from "@src/components/homepage/ContactSection";
import { HeroSection } from "@src/components/homepage/HeroSection";
import { ProjectsSection } from "@src/components/homepage/ProjectsSection";
import {
  HomepageSections,
  HomepageSection,
  HomepageSectionSwitchHandler,
} from "@src/contexts/HomepageSections.context";
import { useState } from "react";

export default function Home() {
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
    </HomepageSections.Provider>
  );
}
