import styled from "styled-components";
import tw from "tailwind.macro";
import { MainLayout } from "@components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Heading>Welcome</Heading>
      <Button>button</Button>
    </MainLayout>
  );
}

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
  ${tw`text-6xl font-thin`}
`;

const Button = styled.button`
  ${tw`text-secondary bg-primary`}
`;
