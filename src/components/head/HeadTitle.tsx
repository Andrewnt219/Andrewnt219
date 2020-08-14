import Head from "next/head";
import React, { ReactElement } from "react";

type Props = {
  title: string;
  noExtension?: boolean;
};

function HeadTitle({ title, noExtension }: Props): ReactElement {
  return (
    <Head>
      <title key="title">
        {title + (!noExtension && " | Andrew Nguyen - React Web Developer")}
      </title>
    </Head>
  );
}

export { HeadTitle };
