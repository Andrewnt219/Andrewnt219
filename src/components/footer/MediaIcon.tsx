import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { useAnalytics } from "@src/hooks/useAnalytic";
import React, { ReactElement, useContext } from "react";
import { IconType } from "react-icons";
import tw, { css, styled } from "twin.macro";

export type MediaIconProps = {
  Icon: IconType;
  iconColor: IconWrapperProps["iconColor"];
  href: string;
  label: string;
  caption?: string;
};

function MediaIcon({
  Icon,
  iconColor,
  label,
  caption,
  ...anchorAttributes
}: MediaIconProps): ReactElement {
  const { mode } = useContext(ColorThemeContext);

  /* ANCHOR Tracking */
  const { trackEvent } = useAnalytics();

  const onLinkClicked = () => {
    trackEvent({ action: `${label} Clicked`, category: "Contact" });
  };

  return (
    <Container>
      <IconWrapper
        // html attributes
        {...anchorAttributes}
        target="_blank"
        rel="noopener"
        title={label}
        // styling
        isDarkMode={mode === "dark-mode"}
        iconColor={iconColor}
        //
        onClick={onLinkClicked}
      >
        <Icon />
      </IconWrapper>
      <Caption>{caption}</Caption>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  height: 20rem;
  width: 100%;

  ${tw`flex flex-col justify-center items-center rounded overflow-hidden border-borderColor border-2`}
`;

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
    ${tw`z-20`}
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

type IconWrapperProps = {
  iconColor: string;
  isDarkMode: boolean;
};
const IconWrapper = styled.a<IconWrapperProps>`
  ${tw`inline-flex justify-center items-center bg-transparent rounded cursor-pointer relative `};
  width: 100%;
  height: 100%;

  :hover,
  :focus {
    outline: none;
  }

  svg {
    font-size: 5em;
    transition: fill 50ms ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${(p) => lightMode(p.iconColor)};
`;

type CaptionProps = {};
const Caption = styled.span<CaptionProps>`
  line-height: 3;
`;

export { MediaIcon };
