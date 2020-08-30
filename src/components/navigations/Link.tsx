import NextLink, { LinkProps } from "next/link";
import React, { ReactElement, ReactNode, AnchorHTMLAttributes } from "react";
import { styled } from "twin.macro";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
  anchorAttributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
};

function Link({
  children,
  className,
  anchorAttributes,
  ...linkProps
}: Props): ReactElement {
  return (
    <NextLink {...linkProps} passHref>
      <Anchor {...anchorAttributes} className={className}>
        {children}
      </Anchor>
    </NextLink>
  );
}

type AnchorProps = {};
const Anchor = styled.a<AnchorProps>``;

export { Link };
