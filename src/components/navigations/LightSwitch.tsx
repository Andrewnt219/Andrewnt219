import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaRegLightbulb } from "react-icons/fa";
import { ThemeContext } from "@src/contexts/theme.context";

type Props = {};

function LightSwitch({}: Props): ReactElement {
  const { onModeSwitch, mode } = useContext(ThemeContext);

  const switchMode = () => {
    switch (mode) {
      case "light-mode":
        onModeSwitch("dark-mode");
        break;
      case "dark-mode":
        onModeSwitch("light-mode");
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <FaRegLightbulb onClick={switchMode} />
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.span<ContainerProps>`
  display: inline-block;
`;

export { LightSwitch };
