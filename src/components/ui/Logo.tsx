import { GlobalStyling } from "@src/constants/global.constants";
import { ColorThemeContext } from "@src/contexts/ColorTheme.context";
import { useMediaQuery } from "@src/hooks";
import { flickering } from "@src/styles/animation/flickering.animation";
import { glow } from "@src/styles/animation/glow.animation";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { ReactElement, useContext } from "react";
import tw, { styled, css } from "twin.macro";

type Props = {
  // flickering animation
  animated?: NeonTextProps["animated"];

  // size of the logo
  size?: AnchorProps["size"];
};

function Logo({ animated, size = "10rem" }: Props): ReactElement {
  const { mode } = useContext(ColorThemeContext);
  const isDesktopMode = useMediaQuery(GlobalStyling.DesktopBreakpoint);

  const logoSvg = (
    <motion.svg
      width="1em"
      viewBox="0 0 69 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Font */}
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        //
        stroke="var(--text-color)"
        strokeWidth={"2"}
        d="M6.681 13.114c-1.135.19-2.041.364-2.717.52-.208.33-.342.55-.403.663-.182.32-.347.59-.494.806-.139.208-.29.394-.455.559a2.978 2.978 0 01-.455.39.69.69 0 01-.403.117c-.26 0-.49-.056-.689-.169-.19-.121-.286-.243-.286-.364.017-.017.113-.208.286-.572.173-.373.494-.836.962-1.391a.708.708 0 00-.065-.26.923.923 0 01-.065-.182c0-.251.394-.555 1.183-.91.442-.659.906-1.309 1.391-1.95.494-.641 1.096-1.4 1.807-2.275.173-.217.394-.394.663-.533s.537-.208.806-.208c.277 0 .485.026.624.078.139.052.225.121.26.208a.829.829 0 01.065.364c-.035.26-.056.455-.065.585-.13 1.049-.23 1.95-.299 2.704-.06.745-.091 1.49-.091 2.236 0 .685.03 1.313.091 1.885a1.036 1.036 0 01-.273.572.73.73 0 01-.546.247c-.399 0-.663-.1-.793-.299-.121-.2-.182-.537-.182-1.014 0-.347.048-.949.143-1.807zm-1.69-.975a9.39 9.39 0 01.715-.117l1.04-.156c.078-1.205.169-2.071.273-2.6-.338.399-1.014 1.356-2.028 2.873zm5.62-2.08a.125.125 0 01-.04-.091c0-.087.096-.156.286-.208.19-.06.455-.091.793-.091.312 0 .542.082.69.247a.972.972 0 01.26.572l-.235.845c.182-.251.438-.49.767-.715.33-.234.663-.42 1.001-.559.338-.139.616-.208.832-.208.46 0 .793.087 1.001.26.208.165.312.429.312.793a17.075 17.075 0 00-1.014 4.316l.182.637c-.104.2-.251.355-.442.468-.182.121-.45.182-.806.182-.208 0-.36-.07-.455-.208a.896.896 0 01-.143-.52c0-.58.083-1.218.247-1.911.174-.702.373-1.417.598-2.145.087-.277.13-.42.13-.429 0-.121-.07-.182-.208-.182-.19 0-.48.134-.87.403-.382.269-.776.724-1.184 1.365-.407.633-.736 1.465-.988 2.496a2.52 2.52 0 00-.065.286.404.404 0 01-.208.299c-.112.052-.294.078-.546.078-.286 0-.498-.03-.637-.091-.13-.06-.195-.19-.195-.39.026-.121.065-.269.117-.442.503-2.02.889-3.575 1.157-4.667l-.338-.39zm9.867-.169c.225 0 .433.043.624.13.2.087.36.204.481.351.165-.633.308-1.166.43-1.599.233-.823.402-1.465.506-1.924a.501.501 0 01.273-.325 1.04 1.04 0 01.494-.117c.156 0 .325.035.507.104.182.07.273.169.273.299-.33 1.3-.693 2.687-1.092 4.16-.572 2.15-.927 3.549-1.066 4.199 0 .286.022.49.065.611-.06.156-.204.26-.429.312-.217.06-.407.091-.572.091-.156 0-.26-.039-.312-.117a1.126 1.126 0 01-.117-.325 5.588 5.588 0 01-.065-.299 4.711 4.711 0 01-1.144.572c-.381.139-.702.208-.962.208-.225 0-.48-.074-.767-.221a2.254 2.254 0 01-.715-.598 1.308 1.308 0 01-.299-.832c0-.485.16-1.105.481-1.859a5.988 5.988 0 011.352-1.976c.59-.563 1.274-.845 2.054-.845zm.026 4.459c.078-.165.156-.394.234-.689.078-.295.156-.598.234-.91.095-.45.208-.897.338-1.339a.446.446 0 00-.325-.338 1.355 1.355 0 00-.468-.091c-.32 0-.667.217-1.04.65a6.5 6.5 0 00-.962 1.521c-.26.572-.39 1.036-.39 1.391 0 .173.048.299.143.377.095.07.217.104.364.104.2 0 .516-.074.95-.221.441-.156.749-.308.922-.455zm4.801 1.157c-.008.06-.026.165-.052.312-.017.147-.082.251-.195.312-.104.06-.281.091-.532.091-.287 0-.499-.03-.637-.091-.14-.06-.213-.19-.221-.39.069-.347.181-.962.338-1.846.052-.295.134-.737.247-1.326.112-.598.199-1.031.26-1.3.086-.615.207-1.018.363-1.209.156-.2.347-.299.572-.299.304 0 .503.043.599.13.104.087.16.2.168.338l-.104.767c.26-.338.568-.615.924-.832.355-.225.675-.338.962-.338.38 0 .68.07.896.208.217.13.325.299.325.507 0 .156-.095.277-.285.364-.183.087-.425.143-.729.169-.476.043-.948.247-1.416.611a3.195 3.195 0 00-1.015 1.287l-.468 2.535zm6.048.767c-.85 0-1.47-.169-1.86-.507-.39-.338-.584-.789-.584-1.352 0-.823.203-1.586.61-2.288a4.673 4.673 0 011.652-1.664 4.27 4.27 0 012.236-.624c.485 0 .892.139 1.222.416.329.269.494.667.494 1.196 0 .303-.1.555-.3.754-.19.19-.467.364-.831.52-.364.147-.954.36-1.768.637a75.77 75.77 0 00-1.794.611c-.035.13-.052.264-.052.403 0 .243.1.429.299.559.208.13.498.195.87.195.235 0 .503-.048.807-.143.303-.095.494-.217.572-.364.294-.537.563-.806.806-.806.355 0 .593.07.715.208.13.13.199.277.208.442-.104.277-.308.559-.611.845-.304.277-.69.507-1.157.689-.468.182-.98.273-1.534.273zm-.56-3.497a26.821 26.821 0 002.12-.767c.554-.243.832-.481.832-.715 0-.104-.057-.186-.17-.247a.683.683 0 00-.363-.104c-.26 0-.56.1-.897.299-.33.2-.637.442-.923.728-.286.286-.486.555-.598.806zm9.057.416c-.303.953-.693 1.699-1.17 2.236-.468.537-.944.806-1.43.806-.866 0-1.3-.78-1.3-2.34 0-.65.078-1.287.234-1.911.165-.624.347-1.161.546-1.612.156-.364.434-.546.832-.546.451 0 .676.2.676.598 0 .043-.052.212-.156.507-.468 1.265-.702 2.236-.702 2.912 0 .32.026.585.078.793.061.2.156.299.286.299.234 0 .494-.264.78-.793.295-.537.564-1.174.806-1.911a14.75 14.75 0 00.533-1.95c.018-.113.1-.212.247-.299a.865.865 0 01.403-.13c.226 0 .386.052.481.156.096.095.143.251.143.468 0 .043-.026.178-.078.403-.13.693-.234 1.283-.312 1.768-.069.477-.104.923-.104 1.339 0 .277.044.507.13.689.096.173.213.26.351.26.399 0 .763-.494 1.092-1.482a22.08 22.08 0 00.82-3.198c.034-.225.225-.338.571-.338.191 0 .377.035.56.104.181.06.277.13.285.208l-.143.663c-.242 1.135-.472 2.05-.689 2.743a5.26 5.26 0 01-.975 1.82c-.433.52-.996.78-1.69.78-.771 0-1.157-.615-1.157-1.846 0-.381.035-.78.104-1.196h-.052zm15.953-5.876c.321.06.53.113.625.156.104.035.173.091.208.169-.183.702-.42 1.699-.716 2.99a607.884 607.884 0 01-.598 2.587c-.19.884-.368 1.668-.533 2.353-.12.477-.312.715-.572.715-.684 0-1.074-.139-1.17-.416l-.025.026-2.12-5.668-.806 3.276c-.155.598-.324 1.274-.506 2.028-.061.251-.157.42-.287.507-.12.087-.355.13-.701.13-.27 0-.468-.048-.598-.143-.122-.087-.182-.238-.182-.455 0-.095.012-.186.038-.273l1.782-7.033c.095-.381.194-.633.298-.754.113-.13.313-.195.599-.195.233 0 .441.026.623.078.182.052.278.13.287.234v.039l2.093 5.798c.563-2.721.922-4.32 1.078-4.797.122-.364.287-.667.495-.91.207-.243.437-.39.688-.442zm2.371 9.113a.982.982 0 01-.637-.221c-.173-.147-.26-.32-.26-.52 0-.295.126-.55.377-.767.252-.217.524-.325.82-.325.26 0 .472.082.636.247a.78.78 0 01.26.585c0 .269-.121.503-.364.702-.242.2-.52.299-.832.299zm6.094-1.274c-.07.303-.178.537-.325.702-.139.165-.368.247-.689.247-.269 0-.468-.043-.598-.13-.121-.095-.182-.251-.182-.468 0-.095.013-.186.04-.273l1.56-6.227c-.01 0-.291.03-.846.091-.667.052-1.083.095-1.248.13a.856.856 0 01-.403-.273.8.8 0 01-.13-.455.62.62 0 01.143-.39.954.954 0 01.364-.286c.693-.139 2.18-.26 4.46-.364a22.444 22.444 0 001.3-.078c.138.06.255.156.35.286a.59.59 0 01.156.39c0 .156-.078.308-.234.455a1.333 1.333 0 01-.533.312l-1.703.065-1.482 6.266z"
      />
      {/* Hat */}
      <motion.path
        fill="#5A6072"
        d="M31.881 4.968l4.269 2.8-6.723 1.676 2.454-4.476z"
      />
    </motion.svg>
  );

  return (
    <Container>
      <Link passHref href="/">
        <Anchor
          aria-label="Link to homepage"
          title="Link to homepage"
          size={size}
        >
          {logoSvg}
        </Anchor>
      </Link>

      <AnimatePresence>
        {mode === "dark-mode" && (
          <NeonText
            aria-hidden="true"
            animated={animated}
            size={size}
            isMobile={!isDesktopMode}
            // framer-motion
            variants={neonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span>D</span>
            <span>a</span>
            <span>r</span>
            <span>k</span>
          </NeonText>
        )}
      </AnimatePresence>
    </Container>
  );
}

const pathVariants: Variants = {
  hidden: {
    pathLength: 0.2,
  },
  visible: {
    pathLength: 0,

    transition: {
      duration: 1.25,
      ease: "easeOut",
      delay: 0.25,
    },
  },
};

const neonVariants: Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      staggerChildren: 0.2,
    },
  },
  exit: {
    scale: 0,
  },
};

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  display: inline-block;
  position: relative;
  /* width and height set to minimum so the Logo and Neon stay near */
  width: min-content;
  height: min-content;
`;

type AnchorProps = {
  size?: string;
};
const Anchor = styled.a<AnchorProps>`
  display: inline-block;

  svg {
    fill: var(--accent-color);
    font-size: ${(p) => p.size};
  }
`;

type NeonTextProps = {
  animated?: boolean;
  size?: AnchorProps["size"];
  isMobile?: boolean;
};
const NeonText = styled(motion.div)<NeonTextProps>`
  ${tw`space-x-1 font-bBold font-heading`}
  font-size: calc(${(p) => p.size} / 8);

  /* Svg box is bigger than it looks so absolute */
  position: absolute;
  right: 0;
  bottom: calc(${(p) => p.size} / -25);

  span {
    /* TODO: Create a performance-optimized version of the website */
    ${(p) =>
      !p.isMobile &&
      css`
        text-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color),
          0 0 40px var(--accent-color), 0 0 50px var(--accent-color),
          0 0 60px var(--accent-color);
      `}

    animation: ${(p) =>
      p.animated &&
      css`
        ${glow} 3s linear infinite , ${flickering}  2s linear both
      `};

    &:nth-child(1) {
      animation-delay: 1s;
    }
    &:nth-child(2) {
      animation-delay: 1.2s;
    }
    &:nth-child(3) {
      animation-delay: 1.8s;
    }
    &:nth-child(4) {
      animation-delay: 2s;
    }
  }
`;

export { Logo };
