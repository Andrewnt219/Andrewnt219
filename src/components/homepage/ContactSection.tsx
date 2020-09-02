import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import { GlobalNumbers } from "@src/constants/global.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import React, { ReactElement, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";
import { HomeSection } from "./shared/HomeSection";

const SECTION_ID = HomepageSectionIds.Contact;

function ContactSection(): ReactElement {
  /* Handle Sidebar active link */
  const [ref, inView] = useInView({
    threshold: GlobalNumbers.HomepageSectionInViewThreshhold,
  });
  const { onSectionSwitch } = useContext(HomepageSections);

  useEffect(() => {
    if (inView) {
      onSectionSwitch(SECTION_ID);
    }
  }, [inView, onSectionSwitch]);

  return (
    <HomeSection heading="Contacts" ref={ref} id={SECTION_ID}>
      Contact
    </HomeSection>
  );
}
export { ContactSection };
