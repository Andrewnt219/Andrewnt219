import { ResponsiveImage } from "@src/components/ui/ResponsiveImage";
import { AboutPictureProps } from "@src/data/images.data";
import { trimLastWord } from "@src/helpers/utils.helpers";
import { useClickOutside } from "@src/hooks";
import React, { CSSProperties, ReactElement, useRef, useState } from "react";
import tw, { css, styled } from "twin.macro";

enum Styling {
  // NOTE lowering imageWidth may cause shifting on zoomed
  ImageWidth = "90vw",
}

type Props = {
  image: AboutPictureProps;
  className?: string;
  style?: CSSProperties;
};

function AboutPicture({ image, className, style }: Props): ReactElement {
  const { src, caption, alt } = image;

  //   To avoid orphan word
  const [captionHead, captionTail] = trimLastWord(caption);

  /* ANCHOR zoom in image */
  const [imageIsFullScreen, setImageIsFullScreen] = useState(false);

  /*  Store the height to prevent layout shift due to image removed */
  const containerRef = useRef<HTMLElement | null>(null);
  const placeholderRef = useRef<HTMLImageElement | null>(null);

  const clickHandler = () => {
    const container = containerRef.current;
    const placeholder = placeholderRef.current;

    if (container && placeholder) {
      placeholder.style.height = container.clientHeight.toString() + "px";
      placeholder.style.width = container.clientWidth.toString() + "px";

      setImageIsFullScreen((prev) => !prev);
    }
  };

  useClickOutside(containerRef, () => setImageIsFullScreen(false));

  return (
    <Container
      className={className}
      style={style}
      title={caption}
      //
      onClick={clickHandler}
      ref={containerRef}
    >
      <Image
        config={{ enablePlaceholder: true }}
        path={src}
        alt={alt}
        //
        sizes={Styling.ImageWidth}
        isFullScreen={imageIsFullScreen}
      />
      <Placeholder
        aria-hidden
        ref={placeholderRef}
        holdSpace={imageIsFullScreen}
      />

      <Caption>
        {captionHead}&nbsp;{captionTail}
      </Caption>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.figure<ContainerProps>`
  ${tw`relative h-full overflow-hidden rounded cursor-pointer`}

  :not(:hover) {
    figcaption {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

type ImageProps = {
  isFullScreen: boolean;
};
const Image = styled(ResponsiveImage)<ImageProps>`
  transition: transform 500ms ease;

  && {
    ${(p) =>
      p.isFullScreen &&
      css`
        position: fixed;
        ${tw`z-10`}
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* NOTE These all go together to make sure zoomed images is appropriately visible */
        width: ${Styling.ImageWidth};
        img {
          height: 70vh;
          object-fit: contain;
        }
        /*  */
      `}
  }
`;

type PlaceholderProps = {
  holdSpace: boolean;
};
// NOTE because of some weird interaction, only img works
const Placeholder = styled.img<PlaceholderProps>`
  opacity: 0;
  pointer-events: none;

  ${(p) =>
    !p.holdSpace &&
    css`
      position: absolute;
      top: 0;
      left: 0;
    `}
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
