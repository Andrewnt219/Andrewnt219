import NextLink, { LinkProps } from "next/link";
import React, { ReactElement, ReactText } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = LinkProps & {
  children: ReactNode;
};

function Link({ children, ...linkProps }: Props): ReactElement {
  return (
    <NextLink {...linkProps} passHref>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
}

type AnchorProps = {};
const Anchor = styled.a<AnchorProps>``;

export { Link };
