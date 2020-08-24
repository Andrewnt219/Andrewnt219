import { allRoutes } from "@src/data/routes.data";
import React, { ReactElement } from "react";
import { DesktopNavigationItem } from "./DesktopNavigationItem";
import tw, { styled } from "twin.macro";
import { LightSwitch } from "../../ui/LightSwitch";

function DesktopNavigation(): ReactElement {
  return (
    <Container>
      {allRoutes.map(({ text, ...linkProps }) => (
        <DesktopNavigationItem key={text} text={text} {...linkProps} />
      ))}
      {/* //TODO move this out of <ul> */}
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomLightSwitch />
      </li>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  ${tw`flex space-x-5 `}
`;

type CustomLightSwitchProps = {};
const CustomLightSwitch = styled(LightSwitch)<CustomLightSwitchProps>`
  ${tw`w-10 flex justify-center items-center`}

  :hover, :focus {
    outline: none;

    svg {
      fill: var(--accent-color);
    }
  }

  svg {
    ${tw`transition-colors duration-300 ease-in-out`}
  }
`;

export { DesktopNavigation };
