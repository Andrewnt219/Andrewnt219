import React, { ImgHTMLAttributes, ReactElement, useMemo } from "react";
import { styled } from "twin.macro";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  path: string;
  className?: string;
  key?: string;
};

type ResponsiveImage = {
  height: number;
  width: number;
  placeholder: string | undefined;
  src: string;
  srcSet: string;
  images: [
    {
      path: string;
      width: number;
      height: number;
    }
  ];
};

/**
 * @param path a path with root from /public/images/
 */
function ResponsiveImage({
  className,
  path,
  alt,
  key,
  ...imgProps
}: Props): ReactElement {
  const responsiveImage: ResponsiveImage = useMemo(
    () => require(`images/${path}?resize`),
    [path]
  );
  const responsiveImageWebp: ResponsiveImage = useMemo(
    () => require(`images/${path}?resize&format=webp`),
    [path]
  );

  return (
    <Picture key={key} className={className}>
      <source srcSet={responsiveImageWebp.srcSet} type="image/webp" />
      <source srcSet={responsiveImage.srcSet} type="image/jpeg" />
      <StyledImage
        {...imgProps}
        //
        src={responsiveImage.src}
        width={responsiveImage.width}
        height={responsiveImage.height}
        alt={alt}
      />
    </Picture>
  );
}

type PictureProps = {};
const Picture = styled.picture<PictureProps>``;

type StyledImageProps = {};
const StyledImage = styled.img<StyledImageProps>``;

export { ResponsiveImage };
