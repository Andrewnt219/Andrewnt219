import { GlobalStyling } from "@src/constants/globalStyles.constants";
import { HomepageSection } from "@src/contexts/HomepageSections.context";
import { homepageSections } from "@src/data/homepageSections.data";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { Link } from "../navigations/Link";

type Props = {
  inViewSection: HomepageSection;
};

// TODO Add animation
function Sidebar({ inViewSection }: Props): ReactElement {
  return (
    <Container>
      <Nav>
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

type ContainerProps = {};
const Container = styled.aside<ContainerProps>`
  display: none;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
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

type StyledLinkProps = {
  active: boolean;
};
const StyledLink = styled(Link)<StyledLinkProps>`
  ${tw`text-ltextColor lowercase`}
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  /* // TODO styled active state with a sliding bar */
  color: ${(p) => p.active && "var(--accent-color)"};
`;

export { Sidebar };
