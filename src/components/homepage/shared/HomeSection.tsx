import {
  HomepageSectionIds,
  HomepageStyling,
} from "@src/constants/homepage.constants";
import { GlobalStyling } from "@src/constants/global.constants";
import { useSidebarActive } from "@src/hooks";
import React, { ReactNode } from "react";
import tw, { styled } from "twin.macro";
import LazyLoad from "react-lazyload";

type Props = {
  heading: string;
  subHeading?: string;
  className?: string;
  id: HomepageSectionIds;
  children: ReactNode;
};

function HomeSection({ heading, subHeading, className, children, id }: Props) {
  const [sectionRef] = useSidebarActive(id);

  return (
    <>
      <Container className={className} ref={sectionRef} id={id}>
        <SubHeading>{subHeading}</SubHeading>

        <Heading>{heading}</Heading>

        <LazyLoad offset={100} height="100vh">
          {children}
        </LazyLoad>
      </Container>
    </>
  );
}

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  min-height: calc(
    100vh - ${GlobalStyling.AppBarHeight} - ${GlobalStyling.MobileBarHeight}
  );

  padding: calc(1rem + ${GlobalStyling.AppBarHeight})
    ${HomepageStyling.PaddingY} ${GlobalStyling.AppBarHeight}
    /*comment here just to fix buggy linting*/ ${HomepageStyling.PaddingY};

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    min-height: calc(100vh - ${GlobalStyling.AppBarHeight});
  }

  @media screen and (orientation: landscape) and (max-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
  }
`;

type HeadingProps = {};
const Heading = styled.h2<HeadingProps>`
  ${tw`font-hBold uppercase`}
  font-size: 2.5em;
  margin-bottom: 1rem;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    font-size: 3em;
  }
`;

type SubHeadingProps = {};
const SubHeading = styled.span<SubHeadingProps>`
  font-size: 1em;
  ${tw`text-ltextColor font-heading`};
`;

export { HomeSection };
