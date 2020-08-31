import { ThemeContext } from "@src/contexts/theme.context";
import React, { ReactElement, useContext } from "react";
import { IconType } from "react-icons";
import tw, { css, styled } from "twin.macro";

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
  const { mode } = useContext(ThemeContext);

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
        isDarkMode={mode === "dark-mode"}
        iconColor={iconColor}
      >
        <Icon />
      </IconWrapper>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

const lightMode = (iconColor: string) => css`
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: circle(0% at 0% 0%);
    background: ${iconColor};
    transition: clip-path 300ms ease;
    ${tw`z-10`}
  }

  svg {
    fill: ${iconColor};
    ${tw`z-20 relative`}
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

const darkMode = (iconColor: string) => css`
  :hover,
  :focus {
    svg {
      fill: ${iconColor};
    }
  }
`;

type IconWrapperProps = {
  iconColor: string;
  isDarkMode: string;
};
// TODO in dark-mode, make the svg white, and colored on hover
const IconWrapper = styled.a<IconWrapperProps>`
  ${tw`inline-flex justify-center items-center w-12 h-12 bg-transparent rounded-sm cursor-pointer relative overflow-hidden`};

  :hover,
  :focus {
    outline: none;
  }

  svg {
    font-size: 2rem;
    transition: fill 250ms ease 50ms;
  }

  ${({ isDarkMode, iconColor }) =>
    isDarkMode ? darkMode(iconColor) : lightMode(iconColor)}
`;

export { MediaIcon };
