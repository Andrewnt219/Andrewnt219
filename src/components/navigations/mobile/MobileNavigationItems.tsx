import { allRoutes } from "@src/data/routes.data";
import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { MobileNavigationItem } from "./MobileNavigationItem";

const navItemsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.3 },
  },
};

type Props = {
  onNavItemClicked: () => void;
};

/**
 * @description renders a list of NavItems
 */
function MobileNavigationItems({ onNavItemClicked }: Props): ReactElement {
  return (
    <Container
      // framer-motion
      variants={navItemsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {allRoutes.map(({ text, ...linkProps }) => (
        <MobileNavigationItem
          key={text}
          text={text}
          {...linkProps}
          onClick={onNavItemClicked}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled(motion.ul)<ContainerProps>`
  padding-left: 10%;
  ${tw`absolute top-0 left-0 w-screen h-screen z-30 text-6xl flex flex-col justify-center items-start`}

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    ${tw`items-center`}
  }
`;

export { MobileNavigationItems };
