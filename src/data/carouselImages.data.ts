import { CarouselImage } from "@src/components/ui/ImageCarousel";

// NOTE root folder must be in "images/"
enum RootFolder {
  Path = "carousel",
}
export const carouselImages: CarouselImage[] = [
  {
    src: `${RootFolder.Path}/carousel-1.jpg`,
    alt: "Andrew gave a speech",
  },
  {
    src: `${RootFolder.Path}/carousel-2.jpg`,
    alt:
      "Andrew was awarded for helping the Vietnamese community at Seneca College",
  },
  {
    src: `${RootFolder.Path}/carousel-3.jpg`,
    alt: "Andrew talked to new IT students",
  },
  {
    src: `${RootFolder.Path}/carousel-4.jpg`,
    alt: "Andrew hanged out at Woodbine beach",
  },
];
