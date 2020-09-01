import { AchievementProps } from "@src/components/ui/Achievement";
import { UsePopupReturns } from "@src/hooks";
import React from "react";

type AchievementContext = {
  achievements: UsePopupReturns<AchievementProps>[0];
  queueAchievement: UsePopupReturns<AchievementProps>[1];
};

/**
 * @description context for Achievement gained
 */
export const AchievementContext = React.createContext<AchievementContext>({
  achievements: [],
  queueAchievement: () => {
    return;
  },
});
