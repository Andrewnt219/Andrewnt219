import styled from "styled-components";
import tw from "tailwind.macro";
// import tw from "twin.macro";

export default function Home() {
  return <Button>Hi</Button>;
}

const Button = styled.button`
  ${tw`text-xl text-secondary bg-primary`}
`;
