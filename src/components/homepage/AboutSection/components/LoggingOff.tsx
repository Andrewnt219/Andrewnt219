import { GlobalStyling } from "@src/constants/global.constants";
import { aboutPictures, aboutThumbnails } from "@src/data/images.data";
import React, { ReactElement } from "react";
import tw, { styled } from "twin.macro";
import { AboutArticle } from "./shared/AboutArticle";
import { AboutParagraph } from "./shared/AboutParagraph";
import { AboutPicture } from "./shared/AboutPicture";

type Props = {};

function LoggingOff({}: Props): ReactElement {
  return (
    <AboutArticle thumbnail={aboutThumbnails["logging-off"]}>
      <ParagraphContainer>
        <ParagraphTitle>Pay it forward</ParagraphTitle>
        Whenever my schedule is cleared, I enjoy connecting with others through
        voluntary positions. It is a great way for me to make new friends and
        learn about the diversity. Human interaction is also the reason why I
        love front-end work so much!
        <Images>
          <li style={{ gridArea: "seneca" }}>
            <AboutPicture
              image={{ ...aboutPictures["seneca-open-house"], sizes: "40vw" }}
            />
          </li>
          <li style={{ gridArea: "ssf" }}>
            <AboutPicture image={{ ...aboutPictures["ssf"], sizes: "40vw" }} />
          </li>
          <li style={{ gridArea: "vietnam" }}>
            <AboutPicture
              image={{ ...aboutPictures["taste-of-vietnam"], sizes: "40vw" }}
            />
          </li>
        </Images>
      </ParagraphContainer>
    </AboutArticle>
  );
}

const { Title: ParagraphTitle, Container: ParagraphContainer } = AboutParagraph;

type ImagesProps = {};
const Images = styled.ul<ImagesProps>`
  width: 40%;
  display: grid;
  gap: 1rem;

  /* NOTE consider changing sizes if grid-template-areas is changed  */
  grid-template-areas:
    "ssf  seneca"
    "ssf  vietnam";

  img {
    object-fit: cover;
  }
`;

export { LoggingOff };
