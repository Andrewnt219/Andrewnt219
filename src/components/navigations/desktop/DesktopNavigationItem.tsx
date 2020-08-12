import { Route } from "@src/data/routes.data";
import { useRouteMatch } from "@src/hooks";
import Link from "next/link";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw, { css } from "twin.macro";

type Props = Route & {};

function DesktopNavigationItem({
  text,
  exact,
  ...linkProps
}: Props): ReactElement {
  /* Matching */
  const { href } = linkProps;
  const isActive = useRouteMatch(href.toString(), exact);

  return (
    <ListItem>
      <Link {...linkProps} passHref>
        <Anchor isActive={isActive}>{text}</Anchor>
      </Link>
    </ListItem>
  );
}

type ContainerProps = {};
const ListItem = styled.li<ContainerProps>``;

type AnchorProps = {
  isActive: boolean;
};
const Anchor = styled.a<AnchorProps>`
  ${(p) =>
    p.isActive &&
    css`
      ${tw`text-accent`}
    `}
`;

export { DesktopNavigationItem };
