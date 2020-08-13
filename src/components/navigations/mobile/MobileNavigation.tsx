import { allRoutes } from "@src/data/routes.data";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";
import { Hamburger } from "./Hamburger";
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

function MobileNavigation(): ReactElement {
  // control menu open state
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  return (
    <>
      <AnimatePresence>
        {menuIsOpened && (
          <NavigationItems
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
                onClick={() => setMenuIsOpened(false)}
              />
            ))}
          </NavigationItems>
        )}
      </AnimatePresence>
      <Hamburger isOpened={menuIsOpened} setIsOpened={setMenuIsOpened} />
    </>
  );
}

type ContainerProps = {};
const NavigationItems = styled(motion.ul)<ContainerProps>`
  padding-left: 10%;
  ${tw`absolute top-0 left-0 w-screen h-screen z-30 text-6xl flex flex-col justify-center items-start`}
`;

export { MobileNavigation };
