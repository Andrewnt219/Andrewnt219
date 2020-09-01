import { AchievementProps } from "@src/components/ui/Achievement";
import { UsePopupReturns } from "@src/hooks";
import React from "react";

type Context = {
  achievements: UsePopupReturns<AchievementProps>[0];
  queueAchievement: UsePopupReturns<AchievementProps>[1];
};

/**
 * @description context for Achievement gained
 */
export const AchievementContext = React.createContext<Context>({
  achievements: [],
  queueAchievement: () => {
    return;
  },
});
