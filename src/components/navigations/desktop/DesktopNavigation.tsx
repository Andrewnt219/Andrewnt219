import { allRoutes } from "@src/data/routes.data";
import React, { ReactElement } from "react";
import { DesktopNavigationItem } from "./DesktopNavigationItem";
import tw, { styled } from "twin.macro";
import { LightSwitch } from "../../ui/LightSwitch";

const EMAIL = "hey@andrewnt.dev";

function DesktopNavigation(): ReactElement {
  return (
    <Container>
      {allRoutes.map(({ text, ...linkProps }) => (
        <DesktopNavigationItem key={text} text={text} {...linkProps} />
      ))}

      <EmailContainer>
        <EmailLink href={`mailto:${EMAIL}`}>{EMAIL}</EmailLink>
      </EmailContainer>

      <LightSwitchContainer>
        <CustomLightSwitch />
      </LightSwitchContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.ul<ContainerProps>`
  ${tw`flex space-x-5 text-xl font-heading`}

  li > * {
    ${tw`pb-2`}
  }
`;

type EmailContainerProps = {};
const EmailContainer = styled.li<EmailContainerProps>`
  /* For vertically centered */
  /* Padding bottom is the same as anchors in Container */
  ${tw`flex justify-center items-center pb-2`}
`;

type EmailLinkProps = {};
const EmailLink = styled.a<EmailLinkProps>`
  ${tw`text-sm py-2 px-4 border  rounded-full bg-textColor text-primary border-textColor`}
  border-style: inset;
  ${tw`transition-transform duration-300 ease-in-out`};

  :hover,
  :focus {
    ${tw` duration-300 ease-in-out`}
    transform: scale(1.15);
  }
`;

type LightSwitchContainerProps = {};
const LightSwitchContainer = styled.li<LightSwitchContainerProps>`
  ${tw`flex justify-center items-center`}
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
