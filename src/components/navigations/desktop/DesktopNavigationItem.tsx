import { Route } from "@src/data/routes.data";
import { useRouteMatch } from "@src/hooks";
import Link from "next/link";
import React, { ReactElement } from "react";
import tw, { styled, css } from "twin.macro";

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
  ${tw`font-heading text-xl pb-2 relative`};

  ::after {
    content: "";
    height: 1px;
    width: 0.1px;
    transition: width 200ms cubic-bezier(0, 0, 0.2, 1);
    ${tw`block absolute bottom-0 left-0 right-0   my-0 mx-auto`}
  }

  :hover,
  :focus {
    outline: none;
    ::after {
      color: inherit;
      ${tw`w-full scale-x-150 bg-current`}
    }
  }

  ${(p) =>
    p.isActive &&
    css`
      ${tw`text-accent`}
    `}
`;

export { DesktopNavigationItem };
