import { HeadTitle } from "@src/components/head/HeadTitle";
import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import { NightSky } from "@src/components/particles/NightSky";

export default function Home() {
  return (
    <>
      <Head>
        <HeadTitle title="Portfolio" />
      </Head>
      <Heading>Welcome</Heading>
      <NightSky width="100%" height="20rem" />
    </>
  );
}

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;
