import React, { ReactElement } from "react";

type Props = {
  title: string;
  noExtension?: boolean;
};

function HeadTitle({ title, noExtension }: Props): ReactElement {
  return (
    <title key="title">
      {title + noExtension ? "" : " | Andrew Nguyen - React Web Developer"}
    </title>
  );
}

export { HeadTitle };
