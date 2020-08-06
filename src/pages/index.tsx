import styled from "styled-components";
import tw from "tailwind.macro";
import { MainLayout } from "../components/layout/MainLayout";
// import tw from "twin.macro";

export default function Home() {
  return (
    <MainLayout>
      <Button>Hi</Button>
    </MainLayout>
  );
}

const Button = styled.button`
  ${tw`text-xl text-secondary bg-primary`}
`;
