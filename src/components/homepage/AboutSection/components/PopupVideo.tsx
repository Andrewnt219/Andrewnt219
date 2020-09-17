import { GlobalStyling } from "@src/constants/global.constants";
import React, { ReactElement, VideoHTMLAttributes } from "react";
import tw, { styled } from "twin.macro";

type Props = VideoHTMLAttributes<HTMLVideoElement> & {
  mp4Src: string;
  videoEndedHandler?: () => void;
};

function PopupVideo({
  mp4Src,
  videoEndedHandler,
  ...videoProps
}: Props): ReactElement {
  return (
    <Video autoPlay muted onEnded={videoEndedHandler} {...videoProps}>
      <source src={mp4Src} type="video/mp4" />
      Sorry your browser does not support embedded videos
    </Video>
  );
}

type VideoProps = {};
const Video = styled.video<VideoProps>`
  ${tw`rounded z-50`}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90vw;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.DesktopBreakpoint]}) {
    width: 60vw;
  }
`;

export { PopupVideo };
