import { motion, Variants } from "framer-motion";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";

export type AchievementProps = {
  title: string;
  subtitle: string;
  image: {
    alt: string;
    src: string;
  };
};

function Achievement({
  title,
  subtitle,
  image,
}: AchievementProps): ReactElement {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      exit="hidden"
      animate="visible"
    >
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Icon src={image.src} alt={image.alt} width="1" height="1" />
    </Container>
  );
}

const containerVariants: Variants = {
  hidden: {
    x: "-50%",
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

enum GridArea {
  Title = "title",
  SubTitle = "subtitle",
  Icon = "icon",
}

type ContainerProps = {};
const Container = styled(motion.div)<ContainerProps>`
  ${tw`bg-lprimary p-4 z-50 border-4 border-secondary`}
  width: max-content;
  font-size: 0.8em;

  position: fixed;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  align-items: center;
  justify-items: center;
  column-gap: 1rem;

  grid-template-areas: ${`
  "${GridArea.Icon} ${GridArea.Title}"
  "${GridArea.Icon} ${GridArea.SubTitle}"
  `};
`;

type TitleProps = {};
const Title = styled.span<TitleProps>`
  ${tw`font-hBold uppercase`}
  grid-area: ${GridArea.Title};
`;

type SubTitleProps = {};
const SubTitle = styled.span<SubTitleProps>`
  ${tw`italic`}
  grid-area: ${GridArea.SubTitle};
  font-size: smaller;

  ::before,
  ::after {
    content: '"';
  }
`;

type IconProps = {};
const Icon = styled.img<IconProps>`
  grid-area: ${GridArea.Icon};

  /* NOTE for some reason, width: auto will occasionally cause the svg to have 0 width */
  font-size: inherit;
  width: 2.5em;
`;

export { Achievement };
