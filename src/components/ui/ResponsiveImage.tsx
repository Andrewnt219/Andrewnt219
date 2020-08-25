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

  const sharedImageProps = {
    ...imgProps,
    width: responsiveImage.width,
    height: responsiveImage.height,
    alt: alt,
  };

  return (
    /* //! weird bug that make online inline-styling work with bgImage */
    <div
      key={key}
      className={className}
      style={{
        backgroundSize: "cover",
        backgroundImage: 'url("' + responsiveImage.placeholder + '")',
      }}
    >
      <Picture placeholder={responsiveImage.placeholder}>
        <source srcSet={responsiveImageWebp.srcSet} type="image/webp" />
        <source srcSet={responsiveImage.srcSet} type="image/jpeg" />
        <StyledImage
          {...sharedImageProps}
          //
          src={responsiveImage.src}
        />
      </Picture>
    </div>
  );
}

type PictureProps = {
  placeholder?: string;
};
const Picture = styled.picture<PictureProps>`
  position: relative;
  background: url(${(p) => p.placeholder});
  background-size: cover;
`;

type StyledImageProps = {};
const StyledImage = styled.img<StyledImageProps>``;

export { ResponsiveImage };
