import { LinkProps } from "next/link";

export type Route = LinkProps & {
  // textContent
  text: string;
  // use === for matching
  exact?: boolean;
};

export const allRoutes: Route[] = [
  {
    href: "/",
    as: "/",
    text: "Home",
    exact: true,
  },
  {
    href: "/about",
    as: "/about",
    text: "About",
  },
  {
    href: "/projects",
    as: "/projects",
    text: "Projects",
  },
];
