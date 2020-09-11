import { CarouselImage } from "@src/components/ui/ImageCarousel";

// NOTE root folder must be in "images/"
enum RootFolder {
  Carousel = "carousel",
  About = "about",
}

/* ANCHOR Carousel */
export const carouselImages: CarouselImage[] = [
  {
    src: `${RootFolder.Carousel}/carousel-1.jpg`,
    alt: "Andrew gave a speech",
  },
  {
    src: `${RootFolder.Carousel}/carousel-2.jpg`,
    alt:
      "Andrew was awarded for helping the Vietnamese community at Seneca College",
  },
  {
    src: `${RootFolder.Carousel}/carousel-3.jpg`,
    alt: "Andrew talked to new IT students",
  },
  {
    src: `${RootFolder.Carousel}/carousel-4.jpg`,
    alt: "Andrew visited Woodbine beach",
  },
];

/* TODO Compress all images in About */
/* ANCHOR About thumbnails */
export type AboutThumbnailProps = {
  src: string;
  alt: string;
  title: string;
};

type AboutThumbnailName = "road-to-web-development" | "logging-off";

export const aboutThumbnails: Record<
  AboutThumbnailName,
  AboutThumbnailProps
> = {
  "road-to-web-development": {
    ...carouselImages[2],
    title: "road to web development",
  },
  "logging-off": {
    src: `${RootFolder.About}/logging-off.jpg`,
    alt: "Andrew and his friends",
    title: "Logging off",
  },
};

/* ANCHOR About pictures */
export type AboutPictureProps = {
  src: string;
  alt: string;
  caption: string;
};

type AboutPictureName =
  | "seneca-open-house"
  | "ssf"
  | "taste-of-vietnam"
  | "toronto-island"
  | "party-table-gathering"
  | "coffee-table-gathering";

export const aboutPictures: Record<AboutPictureName, AboutPictureProps> = {
  "seneca-open-house": {
    src: `${RootFolder.About}/giving-back-1.jpg`,
    alt: "Andrew helped new students at Seneca College's Open House",
    caption: "Helping new students at Seneca College",
  },
  ssf: {
    src: `${RootFolder.About}/giving-back-2.jpg`,
    alt: "Andrew gave out free stationaries for a final exam",
    caption: "Supplying stationaries during a final exam",
  },
  "taste-of-vietnam": {
    src: `${RootFolder.About}/giving-back-3.jpg`,
    alt: "Andrew decorated a point of interest in Taste Of Vietnam 2019",
    caption: "Decorating for Taste of Viet Nam",
  },
  "toronto-island": {
    src: `${RootFolder.About}/friends-1.jpg`,
    alt: "Andrew went on a picnic with friends at Toronto's Island",
    caption: "Going on a picnic at Toronto's Island",
  },
  "party-table-gathering": {
    src: `${RootFolder.About}/friends-2.jpg`,
    alt: "Andrew at his farewell party before going to Canada",
    caption: "Friends sent me off to Canada",
  },
  "coffee-table-gathering": {
    src: `${RootFolder.About}/friends-3.jpg`,
    alt: "Hanging out at a coffee house",
    caption: "Hanging out at a coffee house",
  },
};
