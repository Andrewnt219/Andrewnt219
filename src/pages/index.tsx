import styled from "styled-components";
import tw from "tailwind.macro";
import { MainLayout } from "@src/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Heading>Welcome</Heading>
    </MainLayout>
  );
}

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;
