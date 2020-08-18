import tw, { css, styled } from "twin.macro";
import React, { ReactElement, ReactNode, useContext } from "react";
import { ThemeContext } from "@src/contexts/theme.context";
import { buttonFlickering } from "@src/styles/animation/flickering.animation";
import { motion, Variants } from "framer-motion";

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

type Props = StyledButtonProps & {
  children: ReactNode;
};

function Button({ children, ...styleProps }: Props): ReactElement {
  const { mode } = useContext(ThemeContext);

  if (mode === "dark-mode") {
    return (
      <DarkButton
        {...styleProps}
        variants={darkButtonVariants}
        animate="visible"
      >
        {children}
      </DarkButton>
    );
  }

  return <LightButton {...styleProps}>{children}</LightButton>;
}

export { Button };
type StyledButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  styledVariants?: "outlined" | "contained" | "text";
};
const buttonStyle = css`
  ${tw`hocus:outline-none m-0 uppercase font-bBold border border-transparent`}
  margin: 0;
  padding: 1rem 2rem;
`;

type LightButtonProps = StyledButtonProps & {};
export const LightButton = styled.button<LightButtonProps>`
  ${buttonStyle}
  ${tw`bg-accent text-primary`}
  box-shadow: 0 4px 14px 0 rgba(var(--accent-color-rgb), 0.4);

  ${(p) =>
    p.secondary &&
    css`
      box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
      ${tw`bg-primary text-textColor`};
    `}
`;

type DarkButtonProps = StyledButtonProps & {};
const DarkButton = styled(motion.button)<DarkButtonProps>`
  ${buttonStyle}
  ${tw`text-accent border-accent border bg-transparent`}

  :hover,
  :focus {
    animation: ${buttonFlickering} 0.8s ease-out infinite alternate;
  }
`;
