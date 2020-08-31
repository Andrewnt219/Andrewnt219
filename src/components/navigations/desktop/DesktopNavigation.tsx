import { allRoutes } from "@src/data/routes.data";
import React, { ReactElement, useContext } from "react";
import { DesktopNavigationItem } from "./DesktopNavigationItem";
import tw, { styled, theme } from "twin.macro";
import { LightSwitch } from "../../ui/LightSwitch";
import { PersonalInfo } from "@src/constants/personalInfo.constants";
import { SnackbarContext } from "@src/contexts/Snackbar.context";

function DesktopNavigation(): ReactElement {
  const { displaySnackbar } = useContext(SnackbarContext);

  return (
    <Container>
      {allRoutes.map(({ text, ...linkProps }) => (
        <DesktopNavigationItem key={text} text={text} {...linkProps} />
      ))}

      <EmailContainer onClick={() => displaySnackbar("Copy to clipboard")}>
        <EmailLink href={`mailto:${PersonalInfo.Email}`}>
          {PersonalInfo.Email}
        </EmailLink>
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
  ${tw` py-2 px-4  rounded-full bg-textColor text-primary`}
  transition: transform 300ms ease,
    color ${theme`transitionDuration.theme`} ${theme`transitionTimingFunction.theme`},
    background-color ${theme`transitionDuration.theme`} ${theme`transitionTimingFunction.theme`};

  :hover,
  :focus {
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
