type Route = {
  // url in pages
  href: string;
  // url in browsers
  asPath: string;
  // textContent
  text: string;
};

export const allRoutes: Route[] = [
  {
    href: "/",
    asPath: "/",
    text: "Home",
  },
  {
    href: "/about",
    asPath: "/about",
    text: "About",
  },
  {
    href: "/projects",
    asPath: "/projects",
    text: "Projects",
  },
];
