import { allRoutes } from "@src/data/routes.data";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { DesktopNavigationItem } from "./DesktopNavigationItem";

function DesktopNavigation(): ReactElement {
  return (
    <Container>
      {allRoutes.map(({ text, ...linkProps }) => (
        <DesktopNavigationItem key={text} text={text} {...linkProps} />
      ))}
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { DesktopNavigation };
