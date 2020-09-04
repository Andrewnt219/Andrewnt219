/* SECTION Stacks data*/
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
// type StacksData = Record<Stack, string>;

// export const stacksData: StacksData = _generateStacksData();

// function _generateStacksData(): StacksData {
//   return STACKS.reduce(
//     (newObject, stack) => ({
//       ...newObject,
//       [stack]: _generateStackIconPath(stack),
//     }),
//     {} as StacksData
//   );
// }

function _generateStackIconPaths(fileNames: Stack[]) {
  return fileNames.map((fileName) => `/svgs/stacks/${fileName}-icon.svg`);
}
/* !SECTION Stacks data*/

/* SECTION Projects data */
// NOTE imageSrc are from root images/
export type HomePageProject = {
  title: string;
  shortDescription: string;
  stackIconSources: string[];
  imageSrc: string;
  links: {
    readMore: string;
    demo: string;
    github: string;
  };
};

export const homepageProjectsData: HomePageProject[] = [
  {
    title: "animovies",
    shortDescription: "a movie database",
    stackIconSources: _generateStackIconPaths([
      "sass",
      "react-js",
      "styled-components",
    ]),
    links: {
      readMore: "readmore",
      demo: "demo",
      github: "github",
    },
    imageSrc: _generateProjectImageSource("ani-movies-thumbnail.jpg"),
  },
  {
    title: "tamago-sushi-bar",
    shortDescription: "A sushi bar",
    stackIconSources: _generateStackIconPaths([
      "framer-motion",
      "react-js",
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
