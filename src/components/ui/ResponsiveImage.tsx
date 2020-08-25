import React, { ImgHTMLAttributes, ReactElement, useMemo } from "react";
import tw, { styled } from "twin.macro";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  path: string;
  className?: string;
  key?: string;
  src?: never;
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

  const placeholderImage = useMemo(() => require(`images/${path}?lqip`), [
    path,
  ]);

  const sharedImageProps = {
    ...imgProps,
    width: responsiveImage.width,
    height: responsiveImage.height,
    alt: alt,
  };

  return (
    <Picture key={key} className={className}>
      <source srcSet={responsiveImageWebp.srcSet} type="image/webp" />
      <source srcSet={responsiveImage.srcSet} type="image/jpeg" />
      <StyledImage
        {...sharedImageProps}
        //
        src={responsiveImage.src}
      />

      <PlaceholderImage
        {...sharedImageProps}
        //
        src={placeholderImage}
      />
    </Picture>
  );
}

type PictureProps = {};
const Picture = styled.picture<PictureProps>`
  position: relative;
`;

type StyledImageProps = {};
const StyledImage = styled.img<StyledImageProps>`
  ${tw`absolute top-0 left-0 z-10`}
`;

type PlaceholderImageProps = {};
const PlaceholderImage = styled.img<PlaceholderImageProps>``;

export { ResponsiveImage };
