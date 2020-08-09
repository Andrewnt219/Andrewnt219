import styled from "styled-components";
import tw from "twin.macro";
import { MainLayout } from "@src/components/layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <Heading>Welcome</Heading>
    </div>
  );
}

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;
