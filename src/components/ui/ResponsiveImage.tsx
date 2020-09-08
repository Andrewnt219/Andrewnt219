import React, {
  forwardRef,
  ImgHTMLAttributes,
  SourceHTMLAttributes,
  useMemo,
  useState,
} from "react";
import tw, { styled } from "twin.macro";
import { Loader } from "./Loader";

type Ref = HTMLImageElement;
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
const ResponsiveImage = forwardRef<Ref, Props>(
  ({ className, path, sizes, key, config, ...imgProps }, ref) => {
    /* ANCHOR loading state */
    const [isLoading, setIsLoading] = useState(true);

    /* ANCHOR image props */
    const { alt, width } = imgProps;

    const sharedSourceProps: SourceHTMLAttributes<HTMLSourceElement> = {
      sizes: sizes,
    };

    /* ANCHOR import image with responsive-loader */
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
      <Container
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
            ref={ref}
            // NOTE this is the actual width on screen
            computedWidth={width?.toString()}
            //
            onLoad={() => setIsLoading(false)}
          />
        </Picture>
        {isLoading && <CustomLoader />}
      </Container>
    );
  }
);

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  ${tw`relative`}
`;

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

const CustomLoader = styled(Loader)`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent`};
`;

ResponsiveImage.displayName = "ResponsiveImage";
export { ResponsiveImage };
