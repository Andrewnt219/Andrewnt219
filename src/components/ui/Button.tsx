import tw, { styled, css } from "twin.macro";
import React, { ReactNode, useContext } from "react";
import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { buttonFlickering } from "@src/styles/animation/flickering.animation";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "@src/hooks";

type Ref = HTMLAnchorElement;
type Props = StyledButtonProps & {
  children: ReactNode;
  className?: string;
  // NOTE conflict between button and anchor event handlers
  anchorProps?: boolean | { href: string; target?: string; rel?: string };
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void;
};

// NOTE Ref is used for Button as a link only
const Button = React.forwardRef<Ref, Props>(
  ({ className, children, anchorProps, onClick, ...styleProps }, ref) => {
    const { mode } = useContext(ColorThemeContext);

    // Disable flickering animation in mobile because it cannot be seen
    const enableEnterAnimation = useMediaQuery();

    const sharedButtonProps = {
      ...styleProps,
      ...(typeof anchorProps === "object" ? anchorProps : {}),
      className,
      ref: anchorProps ? ref : undefined,
      as: anchorProps ? motion.a : undefined,
      onClick,
    };

    return mode === "dark-mode" ? (
      <DarkButton
        {...sharedButtonProps}
        //
        variants={enableEnterAnimation ? darkButtonVariants : undefined}
        animate="visible"
      >
        {children}
      </DarkButton>
    ) : (
      <LightButton {...sharedButtonProps}>{children}</LightButton>
    );
  }
);

type StyledButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  styledVariants?: "outlined" | "contained" | "text";
};
// Keep the transparent border to avoid layout shift between dark/light mode
const sharedButtonStyle = css<StyledButtonProps>`
  ${tw`hocus:outline-none uppercase cursor-pointer text-center`}
  padding: 0.75em 2em;

  ${(p) =>
    p.primary &&
    css`
      ${tw`border border-transparent rounded`}
    `}
  ${(p) =>
    p.secondary &&
    css`
      ${tw`border-b border-current`}
    `}
`;

type LightButtonProps = StyledButtonProps & {};
export const LightButton = styled(motion.button)<LightButtonProps>`
  --shadow-color: rgba(var(--accent-color-rgb), 0.4);

  ${sharedButtonStyle}

  ${(p) =>
    p.primary &&
    css`
      ${tw`bg-accent text-primary`}
      box-shadow: 0 4px 14px 0 var(--shadow-color);
      transition: transform 200ms ease, box-shadow 500ms ease;

      :hover,
      :focus {
        transform: translateY(-0.2em);
        box-shadow: 0 6px 20px var(--shadow-color);
      }

      /* Active should be below hover */
      :active {
        box-shadow: 0 4px 14px 0 var(--shadow-color);
        transform: translateY(0);
      }
    `}

  ${(p) =>
    p.secondary &&
    css`
      ${tw`transition-colors duration-200 ease-linear`};

      :hover,
      :focus {
        ${tw`text-accent`};
      }
    `}
`;

type DarkButtonProps = StyledButtonProps & {};
const DarkButton = styled(motion.button)<DarkButtonProps>`
  --shadow: 0 0 0.5rem 0 var(--accent-color);
  --shadow-1: var(--shadow), inset 0 0 0.5rem rgba(67, 183, 255, 0.1),
    0 0.2rem 0 #000;
  --shadow-2: 0 0 1rem rgba(67, 183, 255, 0.6),
    inset 0 0 1rem rgba(67, 183, 255, 0.4), 0 0.2rem 0 #000;

  ${sharedButtonStyle}

  &:hover,
  &:focus {
    animation: ${(p) => buttonFlickering(p.secondary)} 0.8s ease-out infinite
      alternate;
  }

  ${(p) =>
    p.primary &&
    css`
      ${tw`text-accent border-accent border bg-transparent`}
      box-shadow: var(--shadow);
    `}

  ${(p) =>
    p.secondary &&
    css`
      ${tw`border-textColor py-0 rounded-none`}

      :hover,
      :focus {
      }
    `}
`;

const darkButtonVariants: Variants = {
  visible: {
    opacity: [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
    ],
    transition: {
      duration: 2,
      times: [
        0,
        0.1,
        0.101,
        0.102,
        0.2,
        0.201,
        0.206,
        0.3,
        0.301,
        0.305,
        0.306,
        0.45,
        0.451,
        0.5,
        0.55,
        0.551,
        0.57,
        0.571,
        0.6,
        0.601,
        0.65,
        0.651,
        0.75,
        0.751,
        0.77,
        0.771,
        0.85,
        0.851,
        0.86,
        0.861,
        0.1,
      ],
    },
  },
};

Button.displayName = "Button";
export { Button };
