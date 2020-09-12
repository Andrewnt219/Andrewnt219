import { HeadTitle } from "@src/components/head/HeadTitle";
import { AboutSection } from "@src/components/homepage/AboutSection/AboutSection";
import { ContactSection } from "@src/components/homepage/ContactSection";
import { HeroSection } from "@src/components/homepage/HeroSection";
import { ProjectsSection } from "@src/components/homepage/ProjectsSection";
import { Sidebar } from "@src/components/homepage/Sidebar";
import { GlobalStyling } from "@src/constants/global.constants";
import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import { useMediaQuery } from "@src/hooks";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

export default function Home() {
  const { inViewSection } = useContext(HomepageSections);

  const showSideBar =
    useMediaQuery(GlobalStyling.DesktopBreakpoint) &&
    inViewSection &&
    inViewSection !== HomepageSectionIds.Hero;

  return (
    <>
      <HeadTitle title="Portfolio" />
      <HeroSection />

      <ProjectsSection />

      <AboutSection />

      <ContactSection />

      <AnimatePresence>
        {/* NOTE Need to be !== null to prevent disply on initial page load*/}
        {showSideBar && <Sidebar inViewSection={inViewSection} />}
      </AnimatePresence>
    </>
  );
}
