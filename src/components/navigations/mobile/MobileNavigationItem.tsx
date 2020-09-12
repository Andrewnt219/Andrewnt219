import { Route } from "@src/data/routes.data";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import tw, { styled, css } from "twin.macro";
import { spinX } from "@src/styles/animation/spin.animation";

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: "-80vh",
  },
};

type Props = Route & {
  onClick: () => void;
};

/**
 * @description render a Nav Link with active state awareness
 */
function MobileNavigationItem({
  text,
  onClick,
  ...linkProps
}: Props): ReactElement {
  /* Matching */
  const { href } = linkProps;
  const [isActive, setIsActive] = useState(false);

  // Check if fragment matches hash
  useEffect(() => {
    if (typeof href !== "string") {
      const fragment = window.location.hash.replace("#", "");

      // no hash === home
      if (fragment) {
        setIsActive(href.hash === fragment);
      } else {
        setIsActive(!href.hash);
      }
    }
  }, [href]);

  return (
    <ListItem variants={navItemVariants}>
      <Link {...linkProps} passHref>
        <Anchor onClick={onClick} isActive={isActive}>
          {text}
        </Anchor>
      </Link>
      <MdKeyboardArrowLeft aria-label="arrow-left-icon" />
    </ListItem>
  );
}

type ListItemProps = {};
const ListItem = styled(motion.li)<ListItemProps>`
  ${tw`flex items-center`}

  svg {
    ${tw`opacity-0 duration-100`}
  }

  a:hover + svg,
  a:focus + svg {
    opacity: 1;
    animation: ${spinX} 1.5s linear infinite;
  }
`;

type AnchorProps = {
  isActive: boolean;
};
const Anchor = styled.a<AnchorProps>`
  ${tw`cursor-pointer font-bBold`}

  ${(p) =>
    p.isActive &&
    css`
      ${tw`text-accent`}

      & + svg {
        fill: var(--accent-color);
      }
    `}
`;

export { MobileNavigationItem };
