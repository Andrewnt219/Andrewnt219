import { HeadTitle } from "@src/components/head/HeadTitle";
import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";

export default function Home() {
  return (
    <>
      <Head>
        <HeadTitle title="Portfolio" />
      </Head>
      <Heading>Welcome</Heading>
    </>
  );
}

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;
