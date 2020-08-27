import React, {
  ImgHTMLAttributes,
  ReactElement,
  SourceHTMLAttributes,
  useMemo,
} from "react";
import { styled } from "twin.macro";

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
  sizes,
  key,
  ...imgProps
}: Props): ReactElement {
  const { alt } = imgProps;

  const sharedSourceProps: SourceHTMLAttributes<HTMLSourceElement> = {
    sizes: sizes,
  };

  const responsiveImage: ResponsiveImage = useMemo(
    () => require(`images/${path}?resize`),
    [path]
  );

  const responsiveImageWebp: ResponsiveImage = useMemo(
    () => require(`images/${path}?resize&format=webp`),
    [path]
  );

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
        <source
          {...sharedSourceProps}
          srcSet={responsiveImageWebp.srcSet}
          type="image/webp"
        />
        <source
          {...sharedSourceProps}
          srcSet={responsiveImage.srcSet}
          type="image/jpeg"
        />
        <StyledImage
          {...imgProps}
          width={responsiveImage.width}
          height={responsiveImage.height}
          alt={alt}
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
