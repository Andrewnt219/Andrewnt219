import React, { ReactElement, ReactNode } from "react";
import tw, { styled } from "twin.macro";
import { Card } from "../Card";

type Props = {
  className?: string;
  children: ReactNode;
};

function AboutCard({ children, className }: Props): ReactElement {
  return <Card className={className}>{children}</Card>;
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { AboutCard };
