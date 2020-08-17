import { allRoutes } from "@src/data/routes.data";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";
import { LightSwitch } from "../../ui/LightSwitch";
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
          <>
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
            <CustomLightSwitch />
          </>
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

type CustomLightSwitchProps = {};
const CustomLightSwitch = styled(LightSwitch)<CustomLightSwitchProps>`
  position: fixed;
  bottom: 2rem;
  right: 1rem;

  background: rgba(var(--secondary-color-rgb), 0.8);
  transition: background 300ms ease;

  ${tw`hocus:outline-none inline-flex justify-center items-center w-20 h-20 rounded-full z-30`}

  svg {
    font-size: 2rem;
    transition: fill 300ms ease;
  }

  :hover,
  :focus {
    ${tw`bg-textColor`}
    svg {
      fill: var(--primary-color);
    }
  }
`;

export { MobileNavigation };
