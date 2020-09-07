import { removeSlug, toTitleCase } from "@src/helpers/utils.helpers";

/* SECTION Stacks data*/
// NOTE STACKS are also filenames.svg
const STACKS = [
  "css",
  "express.js",
  "firebase",
  "framer-motion",
  "handlebars",
  "html",
  "javascript",
  "jest",
  "material-ui",
  "mongoDB",
  "next.js",
  "node.js",
  "pwa",
  "react.js",
  "react-router",
  "redux",
  "sass",
  "styled-components",
  "tailwindcss",
  "typescript",
  "mdx",
] as const;

type StackName = typeof STACKS[number];

function _generateStackIconPaths(
  fileNames: StackName[]
): HomePageProject["stacksInfo"] {
  // remove slug, then transform to capital casing
  return fileNames.map((fileName) => ({
    name: toTitleCase(removeSlug(fileName)),
    imageSource: `/svgs/stacks/${fileName}-icon.svg`,
  }));
}
/* !SECTION Stacks data*/

/* SECTION Projects data */
export type StackInfo = {
  name: string;
  imageSource: string;
};

// NOTE imageSrc are from root images/
export type HomePageProject = {
  title: string;
  shortDescription: string;
  stacksInfo: StackInfo[];
  imageSrc: string;
  links: {
    readMore: string;
    demo: string;
    github: string;
  };
};

export const homepageProjectsData: HomePageProject[] = [
  {
    title: "AniMovies",
    shortDescription: "a movie database",
    stacksInfo: _generateStackIconPaths([
      "sass",
      "react.js",
      "styled-components",
    ]),
    links: {
      readMore: "readmore",
      demo: "demo",
      github: "github",
    },
    imageSrc: _generateProjectImageSource("ani-movies-thumbnail.png"),
  },
  {
    title: "Tamago",
    shortDescription: "A sushi bar",
    stacksInfo: _generateStackIconPaths([
      "framer-motion",
      "react.js",
      "styled-components",
      "firebase",
    ]),
    links: {
      readMore: "readmore",
      demo: "demo",
      github: "github",
    },
    imageSrc: _generateProjectImageSource("tamago-sushi-bar-thumbnail.jpg"),
  },
  {
    title: "Tamago",
    shortDescription: "A sushi bar",
    stacksInfo: _generateStackIconPaths([
      "framer-motion",
      "react.js",
      "styled-components",
      "firebase",
    ]),
    links: {
      readMore: "readmore",
      demo: "demo",
      github: "github",
    },
    imageSrc: _generateProjectImageSource("tamago-sushi-bar-thumbnail.jpg"),
  },
];

function _generateProjectImageSource(filename: string) {
  return `projects/${filename}`;
}
/* !SECTION Projects data */
