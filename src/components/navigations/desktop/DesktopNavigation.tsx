import React, { ReactElement } from "react";
import tw, { styled, theme } from "twin.macro";
import { LightSwitch } from "../../ui/LightSwitch";
import { Email } from "@src/components/ui/Email";

function DesktopNavigation(): ReactElement {
  return (
    <Container>
      <EmailContainer>
        <EmailLink />
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

  & > li > * {
    ${tw`pb-2`}
  }
`;

type EmailContainerProps = {};
const EmailContainer = styled.li<EmailContainerProps>`
  /* NOTE Padding bottom is the same as anchors in Container */
  ${tw`flex justify-center items-center pb-2`}
  font-size: smaller;
`;

type EmailLinkProps = {};
const EmailLink = styled(Email)<EmailLinkProps>`
  ${tw` py-2 px-4  rounded-full bg-textColor text-primary`}
  transition: transform 300ms ease,
    color ${theme`transitionDuration.theme`} ${theme`transitionTimingFunction.theme`},
    background-color ${theme`transitionDuration.theme`} ${theme`transitionTimingFunction.theme`},
    box-shadow 200ms ease;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0.2rem 0.2rem var(--secondary-color);
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
