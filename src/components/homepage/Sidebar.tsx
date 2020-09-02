import { GlobalStyling } from "@src/constants/global.constants";
import { HomepageSection } from "@src/contexts/HomepageSections.context";
import { homepageSections } from "@src/data/homepageSections.data";
import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { Link } from "../navigations/Link";

type Props = {
  inViewSection: HomepageSection;
};

function Sidebar({ inViewSection }: Props): ReactElement {
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
            <StyledLink
              active={inViewSection === fragment}
              href={`/#${fragment}`}
            >
              {text}
            </StyledLink>
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
  display: none;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    ${tw`z-10 font-heading font-hBold`}
    display: block;
    position: fixed;
    left: 2%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

type NavProps = {};
const Nav = styled.nav<NavProps>`
  ${tw`space-y-10`}
`;

const StyledLink = styled(Link)`
  ${tw`text-ltextColor lowercase`}
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  color: ${(p) => p.active && "var(--accent-color)"};
`;

export { Sidebar };
