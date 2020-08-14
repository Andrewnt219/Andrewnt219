import Head from "next/head";
import React, { ReactElement } from "react";

type Props = {};

function HeadMeta({}: Props): ReactElement {
  return (
    <Head>
      <meta name="author" content="Andrew Nguyen" key="author" />

      <meta
        key="description"
        name="description"
        content="I am a web developer undergraduate. I am actively looking for learning opportunities, internships, and mentorships. I bring user-oriented designs. My specialities are React, TypeScript, UI/Ux"
      />

      <meta
        key="keywords"
        name="keywords"
        content="web, website, webapp, web app, project, portfolio, web developer, react, react-js, react.js, react developer, next-js, next.js, nextjs"
      />

      <meta key="theme" name="theme-color" content="#116dff" />

      <meta key="ogType" name="og:type" content="website" />
      <meta key="ogSiteName" name="og:site-name" content="Andrew Nguyen" />
      {/* //TODO change image */}
      <meta
        key="ogImage"
        name="og:image"
        content="/android-chrome-192x192.png"
      />
      <meta key="ogImageWidth" name="og:image:width" content="192" />
      <meta key="ogImageHeight" name="og:image:height" content="192" />
      <meta
        key="ogTitle"
        name="og:title"
        content="Portfolio | Andrew Nguyen - React Web Developer"
      />
      <meta
        key="ogDescription"
        name="og:description"
        content="I am a web developer undergraduate. I am actively looking for learning opportunities, internships, and mentorships. I bring user-oriented designs. My specialities are React, TypeScript, UI/Ux"
      />
    </Head>
  );
}

export { HeadMeta };
