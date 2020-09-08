import {
  removeSlug,
  toSlugString,
  toTitleCase,
} from "@src/helpers/utils.helpers";

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
export type ProjectName = "AniMovies" | "Tamago" | "Next Article" | "Nodeflix";

export type StackInfo = {
  name: string;
  imageSource: string;
};

// NOTE imageSrc are from root images/
export type HomePageProject = {
  title: ProjectName;
  shortDescription: string;
  additionalNote?: string;
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
    shortDescription:
      "Get the lastest trending movies, look up movies' info, watch trailers, all in a single click.",
    additionalNote: "AniMovies was created for playing with styled-components.",
    stacksInfo: _generateStackIconPaths([
      "react.js",
      "styled-components",
      "framer-motion",
      "redux",
    ]),
    links: {
      readMore: _generateReadMoreLink("AniMovies"),
      demo: "https://andrewnt219.github.io/animovies",
      github: _generateGitHubLink("animovies"),
    },
    imageSrc: _generateProjectImageSource("ani-movies-thumbnail.png"),
  },
  {
    title: "Tamago",
    shortDescription:
      "There is always something for everybody. A place to relax your mind, and enjoy japanese authentic food.",
    additionalNote: "Tamago was created for exploring TypeScript.",
    stacksInfo: _generateStackIconPaths([
      "typescript",
      "react.js",
      "redux",
      "firebase",
    ]),
    links: {
      readMore: _generateReadMoreLink("Tamago"),
      demo: "https://andrewnt219.github.io/tamago-sushi-bar",
      github: _generateGitHubLink("tamago-sushi-bar"),
    },
    imageSrc: _generateProjectImageSource("tamago-sushi-bar-thumbnail.png"),
  },
  {
    title: "Next Article",
    shortDescription:
      "Get updated on what everyone is talking about. Accurately look for articles with advanced search tools.",
    additionalNote: "Next Article was created for practicing Next.js.",
    stacksInfo: _generateStackIconPaths([
      "next.js",
      "material-ui",
      "styled-components",
    ]),
    links: {
      readMore: _generateReadMoreLink("Next Article"),
      demo: "https://next-article.vercel.app/",
      github: _generateGitHubLink("next-article"),
    },
    imageSrc: _generateProjectImageSource("next-article-thumbnail.png"),
  },
  {
    title: "Nodeflix",
    shortDescription:
      "Sign up to rent hundreds of movies at discounted price. Order now to get your favorite movies in just 24 hours.",
    additionalNote:
      "Nodeflix was created to learn back-end with Express.js, MongoDB, JWT, etc.",
    stacksInfo: _generateStackIconPaths([
      "express.js",
      "mongoDB",
      "node.js",
      "sass",
    ]),
    links: {
      readMore: _generateReadMoreLink("Nodeflix"),
      demo: "http://nodeflix.herokuapp.com/",
      github: _generateGitHubLink("nodeflix"),
    },
    imageSrc: _generateProjectImageSource("nodeflix-thumbnail.png"),
  },
];

function _generateProjectImageSource(filename: string) {
  return `projects/${filename}`;
}

function _generateReadMoreLink(projectName: ProjectName) {
  return `/projects/${toSlugString(projectName.toLowerCase())}`;
}

function _generateGitHubLink(repoName: string) {
  return `https://github.com/Andrewnt219/${repoName}`;
}
/* !SECTION Projects data */
