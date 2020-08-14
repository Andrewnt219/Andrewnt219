import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

type Props = {
  className?: string;
};

function NightSky({ className }: Props): ReactElement {
  return (
    <Container
      key="night-sky"
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Stars />
      <Twinkling />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled(motion.div)<ContainerProps>`
  position: relative;
`;

const moveTwinkBack = keyframes`
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}

`;

const sharedCss = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

type StarsProps = {};
const Stars = styled.div<StarsProps>`
  ${sharedCss}
  background: #000
    url(/imgs/stars.webp) repeat top
    center;
  z-index: 0;
`;

type TwinklingProps = {};
const Twinkling = styled.div<TwinklingProps>`
  ${sharedCss}
  background: transparent
    url(/imgs/twinkling.webp) repeat
    top center;
  z-index: 1;
  animation: ${moveTwinkBack} 200s linear infinite;
`;

export { NightSky };
