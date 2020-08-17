import tw, { styled } from "twin.macro";

type ButtonProps = {};
export const Button = styled.button<ButtonProps>`
  ${tw`hocus:outline-none`}
`;
