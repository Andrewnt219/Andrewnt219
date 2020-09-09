import { HeadTitle } from "@src/components/head/HeadTitle";
import { AboutCard } from "@src/components/ui/about/AboutCard";
import React, { ReactElement } from "react";

type Props = {};
function About(): ReactElement {
  return (
    <>
      <HeadTitle title="About" />
      <AboutCard>The road to web development</AboutCard>
      <AboutCard>How programming change the way I think, forever</AboutCard>
      <AboutCard>How my life experience change the way I program</AboutCard>
    </>
  );
}

export default About;
