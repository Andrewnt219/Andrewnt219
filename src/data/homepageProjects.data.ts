/* SECTION Stacks data*/
const ROOT_FOLDER = "/svgs/stacks";

// NOTE STACKS are also filenames.svg
const STACKS = [
  "css",
  "express-js",
  "firebase",
  "framer-motion",
  "handlebars",
  "html",
  "javascript",
  "jest",
  "material-ui",
  "mongoDB",
  "next-js",
  "node-js",
  "pwa",
  "react-js",
  "react-router",
  "redux",
  "sass",
  "styled-components",
  "tailwindcss",
  "typescript",
] as const;

type Stack = typeof STACKS[number];
type StacksData = Record<Stack, string>;

export const stacksData: StacksData = _generateStacksData();

function _generateStacksData(): StacksData {
  return STACKS.reduce(
    (newObject, stack) => ({
      ...newObject,
      [stack]: _generateStackIconPath(stack),
    }),
    {} as StacksData
  );
}

function _generateStackIconPath(fileName: Stack) {
  return `${ROOT_FOLDER}/${fileName}-icon.svg`;
}
/* !SECTION Stacks data*/

/* SECTION Projects data */
type HomePageProject = {
  title: string;
  shortDescription: string;
  stack: Stack[];
  links: {
    readMore: string;
    demo: string;
    github: string;
  };
};

export const homepageProjectsData: HomePageProject[] = [];
/* !SECTION Projects data */
