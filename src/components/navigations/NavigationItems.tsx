import { allRoutes } from "@src/data/routes.data";
import React, { ReactElement } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavigationItem } from "./NavigationItem";

type Props = {
  onNavItemClicked: () => void;
};

function NavigationItems({ onNavItemClicked }: Props): ReactElement {
  return (
    <Container>
      {allRoutes.map(({ text, ...linkProps }) => (
        <NavigationItem
          key={text}
          text={text}
          {...linkProps}
          onClick={onNavItemClicked}
        />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  padding-left: 10%;
  ${tw`absolute top-0 left-0 w-screen h-screen z-30 text-6xl flex flex-col justify-center items-start`}
`;

export { NavigationItems };
