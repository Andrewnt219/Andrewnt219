import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

type Props = {
  message: string;
};
function Snackbar({ message }: Props): ReactElement {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {message}
    </Container>
  );
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "-45%",
    x: "-50%",
  },
  visible: {
    y: "-50%",
    x: "-50%",
    scale: 1,
    opacity: 1,
  },
};

type ContainerProps = {};
const Container = styled(motion.div)<ContainerProps>`
  ${tw`z-50 px-5 py-2  rounded bg-secondary text-white transition-colors duration-theme ease-theme text-lg`}
  position: fixed;
  bottom: 2vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Snackbar };
