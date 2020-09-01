import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { ReactElement, ReactNode, AnchorHTMLAttributes } from "react";
import { styled } from "twin.macro";

export type LinkProps = NextLinkProps & {
  children: ReactNode;
  className?: string;
  active?: AnchorProps["active"];
  anchorAttributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

function Link({
  children,
  active,
  className,
  anchorAttributes,
  ...linkProps
}: LinkProps): ReactElement {
  return (
    <NextLink {...linkProps} passHref>
      <Anchor {...anchorAttributes} active={active} className={className}>
        {children}
      </Anchor>
    </NextLink>
  );
}

type AnchorProps = {
  active?: boolean;
};
const Anchor = styled.a<AnchorProps>``;

export { Link };
