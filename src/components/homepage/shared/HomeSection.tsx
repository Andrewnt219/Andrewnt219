import { HomepageSectionIds } from "@src/constants/elementIds.constants";
import { GlobalStyling } from "@src/constants/global.constants";
import React, { ReactNode } from "react";
import tw, { styled } from "twin.macro";

type Ref = HTMLElement;
type Props = {
  heading: string;
  subHeading?: string;
  className?: string;
  id: HomepageSectionIds;
  children: ReactNode;
};

const HomeSection = React.forwardRef<Ref, Props>(
  ({ heading, subHeading, className, children, id }, ref) => {
    return (
      <Container className={className} ref={ref}>
        {/* NOTE Spacer is used to align the heading in sight (not blocked by Appbar) */}
        <Spacer aria-hidden id={id} />

        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
        {children}
      </Container>
    );
  }
);

type ContainerProps = {};
const Container = styled.section<ContainerProps>`
  min-height: calc(
    100vh - ${GlobalStyling.AppBarHeight} - ${GlobalStyling.MobileBarHeight}
  );

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    min-height: calc(100vh - ${GlobalStyling.AppBarHeight});
  }
`;

const Spacer = styled.div`
  height: ${GlobalStyling.AppBarHeight};
  background: transparent;
  pointer-events: none;
`;

type HeadingProps = {};
const Heading = styled.h2<HeadingProps>`
  ${tw`text-5xl font-hBold uppercase`}
`;

type SubHeadingProps = {};
const SubHeading = styled.h3<SubHeadingProps>`
  ${tw`text-xl`}
`;

HomeSection.displayName = "HomeSection";
export { HomeSection };
