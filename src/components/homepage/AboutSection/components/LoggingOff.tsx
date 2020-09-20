import { GlobalStyling } from "@src/constants/global.constants";
import { aboutPictures, aboutThumbnails } from "@src/data/images.data";

import React, { ReactElement, useState } from "react";
import { useTheme } from "styled-components";
import { css, styled } from "twin.macro";
import { PopupVideo } from "./PopupVideo";
import { AboutArticle } from "./shared/AboutArticle";
import { AboutParagraph } from "./shared/AboutParagraph";
import { AboutPicture } from "./shared/AboutPicture";

const BREAKPOINT = GlobalStyling.AppBarBreakpoint;

type Props = {
  onVideoEnded: () => void;
};

function LoggingOff({ onVideoEnded }: Props): ReactElement {
  const { breakpoints } = useTheme();

  const [showVideo, setShowVideo] = useState(false);

  const legendTitleClickHandler = () => setShowVideo(true);
  const videoEndedHandler = () => {
    setShowVideo(false);
    onVideoEnded();
  };

  return (
    <>
      <AboutArticle thumbnail={aboutThumbnails["logging-off"]}>
        <ParagraphContainer>
          <ParagraphTitle>Pay it forward</ParagraphTitle>

          <Content>
            Whenever my schedule is cleared, I enjoy connecting with others
            through voluntary positions.{" "}
            <EmphasizedText>
              I can sleep soundly at night knowing that I put smiles on
              people&apos;s faces
            </EmphasizedText>
            . Human interaction is also the reason why I love front-end work so
            much!
          </Content>

          <PayItForwardImages>
            <li style={{ gridArea: "seneca" }}>
              <AboutPicture
                image={{ ...aboutPictures["seneca-open-house"], sizes: "40vw" }}
              />
            </li>
            <li style={{ gridArea: "ssf" }}>
              <AboutPicture
                image={{ ...aboutPictures["ssf"], sizes: "40vw" }}
              />
            </li>
            <li style={{ gridArea: "vietnam" }}>
              <AboutPicture
                image={{ ...aboutPictures["taste-of-vietnam"], sizes: "40vw" }}
              />
            </li>
          </PayItForwardImages>
        </ParagraphContainer>

        <ParagraphContainer>
          <LegendParagraphTitle onClick={legendTitleClickHandler} tabIndex={0}>
            It&apos;s not legendary, unless your friends are there to
            see&nbsp;it
          </LegendParagraphTitle>

          <Content>
            As much as I love meeting new people,{" "}
            <EmphasizedText>
              I treasure those who are there for me.
            </EmphasizedText>{" "}
            Making new memories, laughing at old stories as we grow, just
            nothing is better than a friend, unless it is a friend with
            chocolate.
          </Content>

          <FriendsImages>
            <li style={{ gridArea: "toronto" }}>
              <AboutPicture
                image={{
                  ...aboutPictures["toronto-island"],
                  sizes: `(min-width: ${breakpoints[BREAKPOINT]}): 30vw, 40vw`,
                }}
              />
            </li>
            <li style={{ gridArea: "coffee" }}>
              <AboutPicture
                image={{
                  ...aboutPictures["coffee-table-gathering"],
                  sizes: `(min-width: ${breakpoints[BREAKPOINT]}): 30vw, 90vw`,
                }}
              />
            </li>
            <li style={{ gridArea: "party" }}>
              <AboutPicture
                image={{
                  ...aboutPictures["party-table-gathering"],
                  sizes: `(min-width: ${breakpoints[BREAKPOINT]}): 30vw, 40vw`,
                }}
              />
            </li>
          </FriendsImages>
        </ParagraphContainer>
      </AboutArticle>

      {showVideo && (
        <PopupVideo
          videoEndedHandler={videoEndedHandler}
          mp4Src="/videos/legend.mp4"
          width={1920}
          height={1080}
        />
      )}
    </>
  );
}

const {
  Title: ParagraphTitle,
  Container: ParagraphContainer,
  EmphasizedText,
  Content,
} = AboutParagraph;

const LegendParagraphTitle = styled(ParagraphTitle)`
  cursor: pointer;

  transition: color 300ms ease-in-out;

  :hover {
    color: var(--accent-color);
  }
`;

type ImagesProps = {};
const imagesSharedCss = css`
  margin: 1em 0 2em 0;
  width: 100%;
  display: grid;
  gap: 1rem;

  img {
    object-fit: cover;
  }
`;

const PayItForwardImages = styled.ul<ImagesProps>`
  ${imagesSharedCss}

  /* NOTE consider changing sizes if grid-template-areas is changed  */
  grid-template-areas:
    "ssf  seneca"
    "ssf  vietnam";
`;

const FriendsImages = styled.ul<ImagesProps>`
  ${imagesSharedCss}

  grid-template-areas:
  "toronto   party"
  "coffee  coffee";

  @media screen and (min-width: ${(p) => p.theme.breakpoints[BREAKPOINT]}) {
    grid-template-areas: "toronto coffee  party";

    img {
      height: 20vw;
    }
  }
`;

export { LoggingOff };
