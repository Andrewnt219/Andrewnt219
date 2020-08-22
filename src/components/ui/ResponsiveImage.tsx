import React, { ImgHTMLAttributes, ReactElement, useMemo } from "react";
import { styled } from "twin.macro";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  path: string;
  className?: string;
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
  ...imgProps
}: Props): ReactElement {
  const responsiveImage: ResponsiveImage = useMemo(
    () => require(`images/${path}?resize`),
    [path]
  );

  return (
    <StyledImage
      {...imgProps}
      className={className}
      //
      srcSet={responsiveImage.srcSet}
      src={responsiveImage.src}
      width={responsiveImage.width}
      height={responsiveImage.height}
      alt={alt}
    />
  );
}

type StyledImageProps = {};
const StyledImage = styled.img<StyledImageProps>``;

export { ResponsiveImage };
