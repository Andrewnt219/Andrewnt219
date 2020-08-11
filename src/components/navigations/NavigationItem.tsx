import { Route } from "@src/data/routes.data";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw, { css } from "twin.macro";

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

function NavigationItem({
  text,
  onClick,
  exact,
  ...linkProps
}: Props): ReactElement {
  /* Matching */
  const { href } = linkProps;
  const { pathname } = useRouter();
  let isActive = false;
  if (exact) {
    isActive = pathname === href;
  } else {
    isActive = pathname.startsWith(href.toString());
  }

  return (
    <motion.li variants={navItemVariants}>
      <Link {...linkProps} passHref>
        <Anchor onClick={onClick} isActive={isActive}>
          {text}
        </Anchor>
      </Link>
    </motion.li>
  );
}

type AnchorProps = {
  isActive: boolean;
};
const Anchor = styled.a<AnchorProps>`
  ${tw`cursor-pointer`}

  ${(p) =>
    p.isActive &&
    css`
      ${tw`text-accent`}
    `}
`;

export { NavigationItem };
