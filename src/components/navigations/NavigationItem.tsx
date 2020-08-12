import { Route } from "@src/data/routes.data";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import tw, { css } from "twin.macro";
import { spin } from "@src/styles/keyframes";
import { useRouteMatch } from "@src/hooks";

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
  exit: {},
};

type Props = Route & {
  onClick: () => void;
};

/**
 * @description render a Nav Link with active state awareness
 */
function NavigationItem({
  text,
  onClick,
  exact,
  ...linkProps
}: Props): ReactElement {
  /* Matching */
  const { href } = linkProps;
  const isActive = useRouteMatch(href.toString(), exact);

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
    animation: ${spin} 1.5s linear infinite;
  }
`;

type AnchorProps = {
  isActive: boolean;
};
const Anchor = styled.a<AnchorProps>`
  ${tw`cursor-pointer font-bold`}

  ${(p) =>
    p.isActive &&
    css`
      ${tw`text-accent`}

      & + svg {
        fill: var(--accent-color);
      }
    `}
`;

export { NavigationItem };
