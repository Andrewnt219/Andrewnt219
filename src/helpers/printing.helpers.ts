import { devAchievementPassword } from "@src/constants/achievement.constants";
export function printToConsole() {
  console.log(`
            AAAAAAAA
            AA        AAAAAAA
            ÂA       AAAAAAAA
                  AAAA    AAAA
                AAAA      AAAA
              AAAA        AAAA             --------------------
            AAAA          AAAA             | hey@andrewnt.dev |
          AAAA            AAAA             --------------------
        AAAA  AAAAAAAAAA  AAAA
      AAAA  AAAAAAAAAAAA  AAAA
    AAAA                  AAAA
  AAAA                    AAAA
    `);

  console.log(
    `%c Hello there, my fellow developer! How to get your developer achievement:
          1. Click on the last line in the footer 3 times
          2. Click on the React JS icon
          3. The password is "${devAchievementPassword}"
        `,
    "color: yellow"
  );
  return;
}
