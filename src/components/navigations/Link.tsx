import NextLink, { LinkProps } from "next/link";
import React, { ReactElement, ReactNode, AnchorHTMLAttributes } from "react";
import { styled } from "twin.macro";

type Props = LinkProps & {
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
}: Props): ReactElement {
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
