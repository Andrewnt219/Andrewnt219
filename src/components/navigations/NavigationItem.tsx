import { Route } from "@src/data/routes.data";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw, { css } from "twin.macro";

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

  console.log(pathname.match(new RegExp(href.toString())));
  return (
    <Link {...linkProps}>
      <Anchor onClick={onClick} isActive={isActive}>
        {text}
      </Anchor>
    </Link>
  );
}

type AnchorProps = {
  isActive: boolean;
};
const Anchor = styled.li<AnchorProps>`
  ${tw`cursor-pointer`}

  ${(p) =>
    p.isActive &&
    css`
      ${tw`text-purple-500`}
    `}
`;

export { NavigationItem };
