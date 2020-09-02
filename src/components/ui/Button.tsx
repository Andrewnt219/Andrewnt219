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
  isButtonLink?: boolean;
};

// NOTE Ref is used for Button as a link only
const Button = React.forwardRef<Ref, Props>(
  ({ className, children, isButtonLink, ...styleProps }, ref) => {
    const { mode } = useContext(ColorThemeContext);

    // Disable flickering animation in mobile because it cannot be seen
    const enableEnterAnimation = useMediaQuery();

    return mode === "dark-mode" ? (
      <DarkButton
        {...styleProps}
        ref={isButtonLink ? ref : undefined}
        className={className}
        as={isButtonLink ? motion.a : undefined}
        //
        variants={enableEnterAnimation ? darkButtonVariants : undefined}
        animate="visible"
      >
        {children}
      </DarkButton>
    ) : (
      <LightButton
        {...styleProps}
        ref={isButtonLink ? ref : undefined}
        className={className}
        as={isButtonLink ? "a" : undefined}
      >
        {children}
      </LightButton>
    );
  }
);

type StyledButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  styledVariants?: "outlined" | "contained" | "text";
};
const sharedButtonStyle = css`
  ${tw`hocus:outline-none uppercase border border-transparent rounded`}
  padding: 0.75em 2em;
`;

type LightButtonProps = StyledButtonProps & {};
export const LightButton = styled.button<LightButtonProps>`
  --shadow-color: rgba(var(--accent-color-rgb), 0.4);

  ${sharedButtonStyle}
  ${tw`bg-accent text-primary`}

  transition: transform 200ms ease, box-shadow 500ms ease;
  box-shadow: 0 4px 14px 0 var(--shadow-color);

  :hover,
  :focus {
    box-shadow: 0 6px 20px var(--shadow-color);
    transform: translateY(-2px);
  }

  /* Active should be below hover */
  :active {
    box-shadow: 0 4px 14px 0 var(--shadow-color);
    transform: translateY(0);
  }

  ${(p) =>
    p.secondary &&
    css`
      --shadow-color: rgba(0, 0, 0, 0.1);
      ${tw`bg-primary text-textColor`};
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
  ${tw`text-accent border-accent border bg-transparent`}
  box-shadow: var(--shadow);

  &:hover,
  &:focus {
    animation: ${buttonFlickering} 0.8s ease-out infinite alternate;
  }
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
