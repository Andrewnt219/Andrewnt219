import styled from "styled-components";
import tw from "twin.macro";

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
