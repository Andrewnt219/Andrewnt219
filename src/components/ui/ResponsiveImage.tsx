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
  config?: {
    isPng?: boolean;
    enablePlaceholder?: boolean;
  };
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
 * @note must set width on the container, and the image
 * @param path a path with root from /public/images/
 */
function ResponsiveImage({
  className,
  path,
  sizes,
  key,
  config,
  ...imgProps
}: Props): ReactElement {
  const { alt, width } = imgProps;

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
    /* NOTE weird bug that make online inline-styling work with bgImage */
    <div
      key={key}
      className={className}
      style={
        config?.enablePlaceholder
          ? {
              backgroundSize: "cover",
              backgroundImage: 'url("' + responsiveImage.placeholder + '")',
              width,
            }
          : undefined
      }
    >
      <Picture>
        <source
          {...sharedSourceProps}
          srcSet={responsiveImageWebp.srcSet}
          type="image/webp"
        />
        <source
          {...sharedSourceProps}
          srcSet={responsiveImage.srcSet}
          type={`image/${config?.isPng ? "png" : "jpeg"}`}
        />
        <StyledImage
          {...imgProps}
          width={responsiveImage.width}
          height={responsiveImage.height}
          alt={alt}
          src={responsiveImage.src}
          // NOTE this is the actual width on screen
          computedWidth={width?.toString()}
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

type StyledImageProps = {
  computedWidth?: string;
};
const StyledImage = styled.img<StyledImageProps>`
  width: ${(p) => p.computedWidth};
`;

export { ResponsiveImage };
