import { HomepageSectionIds } from "@src/constants/homepage.constants";
import { LinkProps } from "next/link";

export type Route = LinkProps & {
  // textContent
  text: string;
};

export const allRoutes: Route[] = [
  {
    href: {
      pathname: "/",
    },
    text: "Home",
  },
  {
    href: {
      pathname: "/",
      hash: HomepageSectionIds.Projects,
    },

    text: "Projects",
  },
  {
    href: {
      pathname: "/",
      hash: HomepageSectionIds.About,
    },
    text: "About",
  },
  {
    href: {
      pathname: "/",
      hash: HomepageSectionIds.Contact,
    },
    text: "Contact",
  },
];
