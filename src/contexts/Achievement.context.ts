import { AchievementName } from "./../data/achievements.data";
import React from "react";

type Context = {
  finishedAchievements: AchievementName[];
  queueAchievement: (name: AchievementName) => void;
};

/**
 * @description context for Achievement gained
 */
export const AchievementContext = React.createContext<Context>({
  finishedAchievements: [],
  queueAchievement: () => {
    return;
  },
});
