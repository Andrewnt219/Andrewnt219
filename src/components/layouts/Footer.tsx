import React, { ReactElement, useContext, useEffect, useState } from "react";
import tw, { css, styled } from "twin.macro";

import { Logo } from "../ui/Logo";
import { useMediaQuery } from "@src/hooks";

import { spinZ } from "@src/styles/animation/spin.animation";
import { pulse } from "@src/styles/animation/pulse.animation";

import { GlobalStyling } from "@src/constants/global.constants";

import {
  generateStackIconPaths,
  StackInfo,
} from "@src/data/homepageProjects.data";
import { devAchievementPassword } from "@src/constants/achievement.constants";
import { AchievementContext } from "@src/contexts/Achievement.context";
import { useAnalytics } from "@src/hooks/useAnalytic";
import { GaCategories } from "@src/constants/ga.constants";

const ICON_ANIMATION_TIME_IN_SECONDS = [10, 2, 0.5];

const [REACT_JS_ICON, NEXT_JS_ICON] = generateStackIconPaths([
  "react.js",
  "next.js",
]);

/**
 * @description renders page's footer
 */
function Footer(): ReactElement {
  const enableAnimation = useMediaQuery("xl");

  const [icon, setIcon] = useState<StackInfo>(REACT_JS_ICON);

  /* ANCHOR Tracking */
  const { trackEvent } = useAnalytics();

  /* ANCHOR developer achievement */
  const { finishedAchievements, queueAchievement } = useContext(
    AchievementContext
  );

  const minigameFinished = finishedAchievements.includes("dev");

  const [animationSpeedLevel, setAnimationSpeedLevel] = useState<number>(0);

  const [showPasswordInput, setShowPasswordInput] = useState<boolean>(false);

  const [passwordInputValue, setPasswordInputValue] = useState<string>("");

  const [showAchievement, setShowAchievement] = useState<boolean>(false);

  const textClickHandler = () => {
    setAnimationSpeedLevel((prev) => {
      if (prev === ICON_ANIMATION_TIME_IN_SECONDS.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const iconClickHandler = () => {
    if (
      animationSpeedLevel === ICON_ANIMATION_TIME_IN_SECONDS.length - 1 &&
      !minigameFinished
    ) {
      setShowPasswordInput(true);
    }
  };

  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setPasswordInputValue(value.trim());

    if (value.trim() === devAchievementPassword) {
      setShowAchievement(true);
      setShowPasswordInput(false);
    }
  };

  // show dev achivement
  useEffect(() => {
    if (showAchievement) {
      queueAchievement("dev");
      trackEvent({
        action: "dev achieved",
        category: GaCategories.Achievements,
      });
    }
  }, [showAchievement, queueAchievement, trackEvent]);

  // switch to nextjs icon after dev achievement
  useEffect(() => {
    if (minigameFinished) {
      setIcon(NEXT_JS_ICON);
    }
  }, [minigameFinished]);

  return (
    <Container height={GlobalStyling.FooterHeight}>
      <Logo size="20rem" animated={enableAnimation} />

      <Text onClick={textClickHandler}>
        Made by Andrew Nguyen with&nbsp;
        {showPasswordInput ? (
          <PasswordInput
            type="text"
            maxLength={devAchievementPassword.length}
            //
            value={passwordInputValue}
            onChange={onPasswordInputChange}
          />
        ) : (
          <Icon
            src={icon.imageSource}
            alt={icon.name}
            tabIndex={minigameFinished ? -1 : 0}
            //
            animationSecond={
              ICON_ANIMATION_TIME_IN_SECONDS[animationSpeedLevel]
            }
            isReactIcon={icon.name === REACT_JS_ICON.name}
            //
            onClick={iconClickHandler}
          />
        )}
      </Text>
    </Container>
  );
}

type ContainerProps = {
  height: string;
};
const Container = styled.footer<ContainerProps>`
  ${tw`bg-lprimary text-xl sticky bottom-0 left-0 w-full py-5`};
  height: ${(p) => p.height};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

type TextProps = {};
const Text = styled.p<TextProps>`
  ${tw`flex justify-center items-center cursor-pointer`}

  img {
    height: 1.75em;
  }
`;

type IconProps = { animationSecond: number; isReactIcon: boolean };
const Icon = styled.img<IconProps>`
  ${(p) =>
    p.isReactIcon
      ? css`
          animation: ${spinZ} ${p.animationSecond}s linear infinite;
        `
      : css`
          animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        `}
`;

type PasswordInputProps = {};
const PasswordInput = styled.input<PasswordInputProps>`
  ${tw`border-b border-current`}
  width: 3.5em;
  padding: 0 0.25em;

  transition: border-color 300ms ease, color 300ms ease;
  :hover,
  :focus {
    ${tw`outline-none border-accent text-accent`}
  }
`;

export { Footer };
