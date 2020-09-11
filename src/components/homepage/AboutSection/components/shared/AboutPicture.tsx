import { ResponsiveImage } from "@src/components/ui/ResponsiveImage";
import { AboutPictureProps } from "@src/data/images.data";
import { trimLastWord } from "@src/helpers/utils.helpers";
import React, { CSSProperties, ReactElement, useState } from "react";
import tw, { css, styled } from "twin.macro";

type Props = {
  image: AboutPictureProps & { sizes: string };
  className?: string;
  style?: CSSProperties;
};

function AboutPicture({ image, className, style }: Props): ReactElement {
  const { src, caption, alt } = image;

  //   To avoid orphan word
  const [captionHead, captionTail] = trimLastWord(caption);

  return (
    <Container className={className} style={style} title={caption}>
      <Image config={{ enablePlaceholder: true }} path={src} alt={alt} />
      <Caption>
        {captionHead}&nbsp;{captionTail}
      </Caption>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.figure<ContainerProps>`
  ${tw`relative h-full overflow-hidden rounded`}

  :not(:hover) {
    figcaption {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const Image = styled(ResponsiveImage)``;

type CaptionProps = {};
const Caption = styled.figcaption<CaptionProps>`
  ${tw`w-full text-primary text-center `}
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(var(--text-color-rgb), 0.7);
  padding: 0 0.25em;
  font-size: 0.8em;
`;

export { AboutPicture };
