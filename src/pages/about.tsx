import { HeadTitle } from "@src/components/head/HeadTitle";
import React, { ReactElement } from "react";

type Props = {};
function About({}: Props): ReactElement {
  return (
    <>
      <HeadTitle title="About" />
      About
    </>
  );
}

export default About;
