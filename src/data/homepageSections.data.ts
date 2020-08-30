import { HomepageSectionIds } from "@src/constants/elementIds.constants";

type homepageSectionProps = {
  fragment: string;
  text: string;
};
export const homepageSections: homepageSectionProps[] = [
  { fragment: HomepageSectionIds.Hero, text: "home" },
  { fragment: HomepageSectionIds.Projects, text: "projects" },
  { fragment: HomepageSectionIds.About, text: "about me" },
  { fragment: HomepageSectionIds.Contact, text: "contact" },
];
