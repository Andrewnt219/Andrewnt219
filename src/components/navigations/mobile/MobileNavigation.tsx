import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { allRoutes } from "@src/data/routes.data";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";
import { LightSwitch } from "../../ui/LightSwitch";
import { Hamburger } from "./Hamburger";
import { MobileNavigationItem } from "./MobileNavigationItem";
import { FaGithubAlt, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { Email } from "@src/components/ui/Email";
import { GlobalStyling } from "@src/constants/global.constants";

enum Styling {
  PaddingLeft = "10%",
}

enum Timing {
  NavDelayChildren = 0.5,
  NavStaggerChildren = 0.2,
}

enum Data {
  NavChildren = 3,
}

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

            <Footer
              variants={footerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <EmailLink />
              <CustomLightSwitch />
              <Medias>
                <li>
                  <a
                    href={PersonalInfo.Facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to Facebook profile"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href={PersonalInfo.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to GitHub profile"
                  >
                    <FaGithubAlt />
                  </a>
                </li>
                <li>
                  <a
                    href={PersonalInfo.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to LinkedIn profile"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </Medias>
            </Footer>
          </>
        )}
      </AnimatePresence>
      <Hamburger isOpened={menuIsOpened} setIsOpened={setMenuIsOpened} />
    </>
  );
}

const navItemsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: Timing.NavDelayChildren,
      staggerChildren: Timing.NavStaggerChildren,
    },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.3 },
  },
};

const footerDelayTime =
  Timing.NavDelayChildren + Timing.NavStaggerChildren * Data.NavChildren;
const footerVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: footerDelayTime,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
};

type NavigationItemsProps = {};
const NavigationItems = styled(motion.ul)<NavigationItemsProps>`
  padding-left: ${Styling.PaddingLeft};
  ${tw`absolute top-0 left-0 w-screen z-30 text-6xl flex flex-col justify-center items-start`}
  height: calc(100vh - ${GlobalStyling.MobileBarHeight})
`;

type FooterProps = {};
const Footer = styled(motion.footer)<FooterProps>`
  ${tw`z-30 fixed bottom-0 left-0 w-full`}
  padding: 2rem 1rem 2rem ${Styling.PaddingLeft};
  font-size: 1.6rem;

  display: grid;
  grid-template-areas:
    "email    switcher"
    "medias   switcher";
  align-items: center;
  row-gap: 1rem;
`;

type CustomLightSwitchProps = {};
const CustomLightSwitch = styled(LightSwitch)<CustomLightSwitchProps>`
  grid-area: switcher;
  justify-self: flex-end;
  background: rgba(var(--primary-color-light-rgb), 0.8);
  transition: background 300ms ease;

  ${tw`hocus:outline-none inline-flex justify-center items-center w-20 h-20 rounded-full`}

  svg {
    font-size: larger;
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

type EmailLinkProps = {};
const EmailLink = styled(Email)<EmailLinkProps>`
  grid-area: email;
  ${tw`font-heading text-left hocus:outline-none hocus:text-accent`}
  display: inline-block;
  text-decoration: underline;
`;

type MediasProps = {};
const Medias = styled.ul<MediasProps>`
  ${tw`flex justify-center items-center space-x-10`}
  grid-area: medias;
  justify-self: flex-start;

  svg {
    font-size: larger;

    path {
      ${tw`duration-theme ease-theme`}
      transition-property: color;
    }
  }
`;

export { MobileNavigation };
