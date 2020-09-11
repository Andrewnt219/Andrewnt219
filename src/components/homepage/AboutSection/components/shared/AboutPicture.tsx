import { ResponsiveImage } from "@src/components/ui/ResponsiveImage";
import { AboutPictureProps } from "@src/data/images.data";
import { trimLastWord } from "@src/helpers/utils.helpers";
import { useClickOutside } from "@src/hooks";
import React, { CSSProperties, ReactElement, useRef, useState } from "react";
import tw, { css, styled } from "twin.macro";
import { keyframes } from "styled-components";
import { AnimatePresence, Variants } from "framer-motion";

enum Styling {
  // NOTE lowering imageWidth may cause shifting on zoomed
  ImageWidth = "90vw",
}

enum Timing {
  Zoom = 1,
}

type Props = {
  image: AboutPictureProps & { sizes: string };
  className?: string;
  style?: CSSProperties;
};

function AboutPicture({ image, className, style }: Props): ReactElement {
  const { src, caption, alt, sizes } = image;

  //   To avoid orphan word
  const [captionHead, captionTail] = trimLastWord(caption);

  /* ANCHOR zoom in image */
  const [imageIsFullScreen, setImageIsFullScreen] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);
  useClickOutside(imageRef, () => setImageIsFullScreen(false));

  const clickHandler = () => {
    setImageIsFullScreen((prev) => !prev);
  };

  return (
    <Container
      className={className}
      style={style}
      title={caption}
      //
      onClick={clickHandler}
    >
      <Image
        key="AboutPicture-Image"
        config={{ enablePlaceholder: true }}
        path={src}
        alt={alt}
        sizes={sizes}
        loading="lazy"
        //
        isFullScreen={imageIsFullScreen}
      />

      <AnimatePresence>
        {imageIsFullScreen && (
          <ZoomedImage
            key="AboutPicture-ZoomedImage"
            config={{ enableLoading: true }}
            path={src}
            alt={alt}
            sizes={Styling.ImageWidth}
            //
            ref={imageRef}
            //
            animationProps={{
              variants: zoomedImageVariants,
              animate: "visible",
              initial: "hidden",
              exit: "hidden",
            }}
          />
        )}
      </AnimatePresence>

      <Caption>
        {captionHead}&nbsp;{captionTail}
      </Caption>
    </Container>
  );
}

const zoomedImageVariants: Variants = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
    transition: {
      duration: Timing.Zoom,
    },
  },
  visible: {
    x: "-50%",
    y: "-50%",
    opacity: 1,
    transition: {
      duration: Timing.Zoom,
    },
  },
};

type ContainerProps = {};
const Container = styled.figure<ContainerProps>`
  ${tw`relative h-full overflow-hidden rounded cursor-pointer `}

  :not(:hover) {
    figcaption {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const slideOut = keyframes`
  from {
    transform: translate(0,0);
    opacity: 1;
  }

  to {
    transform: translate(-100%, -100% );
    opacity: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-100%, -100% );
    opacity: 0;
  }

  to {
    transform: translate(0,0);
    opacity: 1;
  }
`;

type ImageProps = {
  isFullScreen: boolean;
};
const Image = styled(ResponsiveImage)<ImageProps>`
  animation: ${slideIn} ${Timing.Zoom}s ease forwards;

  ${(p) =>
    p.isFullScreen &&
    css`
      animation: ${slideOut} ${Timing.Zoom + 0.5}s ease forwards;
    `}
`;

type ZoomedImageProps = {};
// NOTE because of some weird interaction, only img works
const ZoomedImage = styled(ResponsiveImage)<ZoomedImageProps>`
  && {
    position: fixed;
    ${tw`z-10`}
    top: 50%;
    left: 50%;

    /* NOTE These all go together to make sure zoomed images is appropriately visible */
    width: ${Styling.ImageWidth};
    img {
      height: 70vh;
      object-fit: contain;
    }
    /*  */
  }
`;

type CaptionProps = {};
const Caption = styled.figcaption<CaptionProps>`
  ${tw`w-full text-primary text-center `}
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(var(--text-color-rgb), 0.8);
  padding: 0 0.25em;
  font-size: 0.8em;
`;

export { AboutPicture };
