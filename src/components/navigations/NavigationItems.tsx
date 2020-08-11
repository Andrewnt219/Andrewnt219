import { allRoutes } from "@src/data/routes.data";
import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavigationItem } from "./NavigationItem";

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

function NavigationItems({ onNavItemClicked }: Props): ReactElement {
  return (
    <Container
      variants={navItemsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {allRoutes.map(({ text, ...linkProps }) => (
        <NavigationItem
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

  @media screen and (min-width: ${(p) => p.theme.breakpoints.xxs}) {
    ${tw`items-center`}
  }
`;

export { NavigationItems };
