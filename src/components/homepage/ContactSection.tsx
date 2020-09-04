import { HomepageSectionIds } from "@src/constants/homepage.constants";
import React, { ReactElement } from "react";
import { HomeSection } from "./shared/HomeSection";

function ContactSection(): ReactElement {
  return (
    <HomeSection heading="Contacts" id={HomepageSectionIds.Contact}>
      Contact
    </HomeSection>
  );
}
export { ContactSection };
