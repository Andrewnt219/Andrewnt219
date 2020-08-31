import Head from "next/head";
import React, { ReactElement } from "react";

function HeadMeta(): ReactElement {
  return (
    <Head>
      <meta name="author" content="Andrew Nguyen" key="author" />

      <meta
        key="description"
        name="description"
        content="Andrew Nguyen is a web developer. Andrew is actively looking for learning opportunities, internships, and mentorships. Bringing user-oriented designs. Speacializing in React, TypeScript, and UI/Ux"
      />

      {/* TODO Consider removing this keywords */}
      <meta
        key="keywords"
        name="keywords"
        content="web, website, webapp, web app, project, portfolio, web developer, react, react-js, react.js, react developer, next-js, next.js, nextjs, front-end developer, frontend developer, front-end, frontend"
      />

      {/* OG */}
      <meta key="ogType" name="og:type" content="website" />
      <meta key="ogSiteName" name="og:site-name" content="Andrew Nguyen" />
      {/* TODO change image */}
      <meta key="ogUrl" property="og:url" content="https://andrewnt.dev/" />
      <meta key="fbAppId" property="fb:app_id" content="349386242864659" />
      <meta key="ogImage" property="og:image" content="/og-image.jpg" />
      <meta key="ogImageWidth" name="og:image:width" content="1285" />
      <meta key="ogImageHeight" name="og:image:height" content="1845" />
      <meta
        key="ogTitle"
        name="og:title"
        content="Portfolio | Andrew Nguyen - Web Developer"
      />
      <meta
        key="ogDescription"
        name="og:description"
        content="I am a web developer undergraduate. I am actively looking for learning opportunities, internships, and mentorships. I bring user-oriented designs. My specialities are React, TypeScript, UI/Ux"
      />

      {/* PWA */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#603cba" />
      <meta name="theme-color" content="#ffffff" />
      <meta key="theme" name="theme-color" content="#116dff" />
    </Head>
  );
}

export { HeadMeta };
