import {
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
  MotionProps,
} from "framer-motion";
import React, {
  forwardRef,
  SourceHTMLAttributes,
  useMemo,
  useState,
} from "react";
import tw, { styled } from "twin.macro";
import { Loader } from "./Loader";

type Ref = HTMLImageElement;
type Props = ForwardRefComponent<
  HTMLImageElement,
  HTMLMotionProps<"img">
>["defaultProps"] & {
  path: string;
  className?: string;
  key?: string;
  src?: never;
  config?: {
    isPng?: boolean;
    enablePlaceholder?: boolean;
    enableLoading?: boolean;
  };
  animationProps?: MotionProps;
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
  (
    { className, path, sizes, key, config, animationProps, ...imageProps },
    ref
  ) => {
    /* ANCHOR loading state */
    const [isLoading, setIsLoading] = useState(true);

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
        /* NOTE className is here, not on the img because of ImageCarousel transition */
        className={className}
        style={
          config?.enablePlaceholder
            ? {
                backgroundSize: "cover",
                // NOTE remove the placeholder after loaded because it causes distortion
                backgroundImage: isLoading
                  ? 'url("' + responsiveImage.placeholder + '")'
                  : "",
                width: imageProps?.width,
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
            {...imageProps}
            width={responsiveImage.width}
            height={responsiveImage.height}
            src={responsiveImage.src}
            ref={ref}
            // NOTE this is the actual width on screen
            computedWidth={imageProps?.width?.toString()}
            // loading event
            onLoad={() => setIsLoading(false)}
            // animation
            {...animationProps}
          />
        </Picture>
        {isLoading && config?.enableLoading && <CustomLoader />}
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
const StyledImage = styled(motion.img)<StyledImageProps>`
  width: 100%;
`;

const CustomLoader = styled(Loader)`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent`};
`;

ResponsiveImage.displayName = "ResponsiveImage";
export { ResponsiveImage };
