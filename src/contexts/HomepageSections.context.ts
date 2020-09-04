import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React from "react";

export type HomepageSection = HomepageSectionIds | null;

export type HomepageSectionSwitchHandler = (section: HomepageSection) => void;

type InViewSection = {
  inViewSection: HomepageSection;
  onSectionSwitch: HomepageSectionSwitchHandler;
};

/**
 * @description context for Sidebar navigation in Homepage
 */
export const HomepageSections = React.createContext<InViewSection>({
  inViewSection: null,
  onSectionSwitch: () => {
    return;
  },
});
