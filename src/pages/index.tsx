import { HeadTitle } from "@src/components/head/HeadTitle";
import { HeroSection } from "@src/components/homepage/HeroSection";
import { SkillsSection } from "@src/components/homepage/SkillsSection";

export default function Home() {
  return (
    <>
      <HeadTitle title="Portfolio" />
      <HeroSection />
      <SkillsSection />
    </>
  );
}
