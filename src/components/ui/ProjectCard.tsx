import { HomePageProject } from "@src/data/homepageProjects.data";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { Link } from "../navigations/Link";
import { ResponsiveImage } from "./ResponsiveImage";
import LazyLoad from "react-lazyload";

type Props = HomePageProject & {};

function ProjectCard({ ...data }: Props): ReactElement {
  const {
    title,
    shortDescription,
    stackIconSources,
    links: { github, demo, readMore },
    imageSrc,
  } = data;
  return (
    <Container>
      <LazyLoad>
        <Image
          path={imageSrc}
          sizes="30vw"
          alt={filePathToName(imageSrc)}
          width="30vw"
        />
      </LazyLoad>

      <Title>{title}</Title>
      <Description>{shortDescription}</Description>

      {stackIconSources.map((iconSource) => (
        <StackIcon
          key={iconSource}
          src={iconSource}
          alt={filePathToName(iconSource)}
        />
      ))}

      <Link
        href={readMore}
        anchorAttributes={{ "aria-label": `Read more about project ${title}` }}
      >
        Read More
      </Link>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={demo} target="_blank" rel="noopener noreferrer">
        Demo
      </a>
    </Container>
  );
}

function filePathToName(path: string) {
  // NOTE remove anything before the final slash
  //      remove extension
  return path.replace(/^.*[/\\]/, "").replace(/\..*$/, "");
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type TitleProps = {};
const Title = styled.h3<TitleProps>``;

type DescriptionProps = {};
const Description = styled.p<DescriptionProps>``;

type ImageProps = {};
const Image = styled(ResponsiveImage)<ImageProps>``;

type StackIconProps = {};
const StackIcon = styled.img<StackIconProps>``;

export { ProjectCard };
