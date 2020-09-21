import { HomepageSection } from "@src/contexts/HomepageSections.context";
import { homepageSections } from "@src/data/homepageSections.data";
import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import NextLink from "next/link";
import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { useAnalytics } from "@src/hooks/useAnalytic";
import { GaCategories } from "@src/constants/ga.constants";

type Props = {
  inViewSection: HomepageSection;
};

function Sidebar({ inViewSection }: Props): ReactElement {
  /* ANCHOR Tracking */
  const { trackEvent } = useAnalytics();

  const linkClickHandler = (fragment: HomepageSectionIds) => {
    trackEvent({
      action: `${fragment} Clicked in Sidebar`,
      category: GaCategories.Sidebar,
    });
  };

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      exit="hidden"
      animate="visible"
    >
      <Nav aria-label="Secondary">
        {homepageSections.map(({ fragment, text }) => (
          <li key={fragment}>
            <NextLink
              href={
                fragment === HomepageSectionIds.Hero ? "/" : `/#${fragment}`
              }
              passHref
            >
              <StyledLink
                active={inViewSection === fragment}
                onClick={() => linkClickHandler(fragment)}
              >
                {text}
              </StyledLink>
            </NextLink>
          </li>
        ))}
      </Nav>
    </Container>
  );
}

const containerVariants: Variants = {
  hidden: {
    y: "-50%",
    x: "-20vh",
  },
  visible: {
    x: "-50%",
    transition: {
      duration: 0.2,
    },
  },
};

type ContainerProps = {};
const Container = styled(motion.aside)<ContainerProps>`
  ${tw`z-10 font-heading font-hBold text-lg`}
  display: block;
  position: fixed;
  left: 2%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

type NavProps = {};
const Nav = styled.nav<NavProps>`
  ${tw`space-y-10`}
`;

type StyledLinkProps = {
  active?: boolean;
};
const StyledLink = styled.a<StyledLinkProps>`
  ${tw`text-ltextColor lowercase`}
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  color: ${(p) => p.active && "var(--accent-color)"};
`;

export { Sidebar };
