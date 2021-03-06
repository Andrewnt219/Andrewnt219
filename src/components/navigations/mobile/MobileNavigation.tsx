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
  NavDelayChildren = 0.4,
  NavStaggerChildrenEnter = 0.1,
  NavStaggerChildrenExit = 0.1,
}

function MobileNavigation(): ReactElement {
  // Remove scroll lock
  const navItemClickHandler = () => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    if (body && html) {
      body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
    }

    setMenuIsOpened(false);
  };

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
                  onClick={navItemClickHandler}
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
      staggerChildren: Timing.NavStaggerChildrenEnter,
    },
  },
  exit: {
    transition: {
      staggerChildren: Timing.NavStaggerChildrenExit,
    },
  },
};

const footerDelayTime =
  Timing.NavDelayChildren + Timing.NavStaggerChildrenEnter * allRoutes.length;
const footerVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "-50%",
    opacity: 1,
    transition: {
      delay: footerDelayTime,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
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
  ${tw`z-30 w-full`}

  /* NOTE Dirty fixed because FixedNavBar make fixed Footer follows the navbar, not viewport */
  position: absolute;
  bottom: calc(-100vh + ${GlobalStyling.AppBarHeight});
  left: 0;
  /*  */

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
  background: var(--text-color);
  border: 2px solid transparent;

  transition: background 300ms ease, border-color 300ms ease;

  ${tw`hocus:outline-none inline-flex justify-center items-center w-20 h-20 rounded-full`}

  svg {
    fill: var(--primary-color);
    font-size: larger;
    transition: fill 300ms ease;
  }

  :hover,
  :focus {
    border-color: var(--text-color);
    background: transparent;
    svg {
      fill: var(--text-color);
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
