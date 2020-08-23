import { HeadTitle } from "@src/components/head/HeadTitle";
import { HeroSection } from "@src/components/landing/HeroSection";
import { ResponsiveImage } from "@src/components/ui/ResponsiveImage";
const responsive = require("images/carousel/carousel-7.webp?resize");

export default function Home() {
  return (
    <>
      <HeadTitle title="Portfolio" />
      <HeroSection />
    </>
  );
}
