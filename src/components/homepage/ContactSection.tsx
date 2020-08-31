import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import { GlobalNumbers } from "@src/constants/global.constants";
import { HomepageSections } from "@src/contexts/HomepageSections.context";
import React, { ReactElement, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";

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
    <Container ref={ref} id={SECTION_ID}>
      Contact
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  min-height: 100vh;

  /* Experimental */
  content-visibility: auto;
  contain-intrinsic-size: 100vh;

  ${tw` bg-blue-500`}
`;

export { ContactSection };
