import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import tw, { styled } from "twin.macro";

export type MediaIconProps = {
  Icon: IconType;
  iconColor: IconWrapperProps["iconColor"];
  href: string;
  label: string;
};

function MediaIcon({
  Icon,
  iconColor,
  label,
  ...anchorAttributes
}: MediaIconProps): ReactElement {
  return (
    <Container>
      <IconWrapper
        // html attributes
        {...anchorAttributes}
        target="_blank"
        rel="noopener"
        aria-label={label}
        title={label}
        // styling
        iconColor={iconColor}
      >
        <Icon />
      </IconWrapper>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type IconWrapperProps = {
  iconColor: string;
};
const IconWrapper = styled.a<IconWrapperProps>`
  ${tw`inline-flex justify-center items-center w-12 h-12 bg-transparent rounded-sm cursor-pointer relative overflow-hidden`};

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: circle(0% at 0% 0%);
    background: ${(p) => p.iconColor};
    transition: clip-path 300ms ease;
    ${tw`z-10`}
  }
  svg {
    font-size: 2rem;
    fill: ${(p) => p.iconColor};
    ${tw`z-20 relative`}
    transition: fill 250ms ease 50ms;
  }

  :hover,
  :focus {
    outline: none;

    svg {
      fill: #fff;
    }

    ::after {
      clip-path: circle(150% at 0% 0%);
    }
  }
`;

export { MediaIcon };
