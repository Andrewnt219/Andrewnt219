import { ResponsiveImage } from "@src/components/ui/ResponsiveImage";
import { GlobalStyling } from "@src/constants/global.constants";
import { carouselImages } from "@src/data/carouselImages.data";
import React, { ReactElement } from "react";
import LazyLoad from "react-lazyload";
import tw, { styled } from "twin.macro";

function Roadmap(): ReactElement {
  const { src, alt } = carouselImages[2];
  return (
    <Container>
      <LazyLoad>
        <ThumbnailContainer>
          {/* NOTE Intentionally set smaller sizes, because the image is blurred anyway */}
          <Thumbnail path={src} alt={alt} sizes="20vw" />
          <ThumbnailTitle>Road to web&nbsp;development</ThumbnailTitle>
        </ThumbnailContainer>
      </LazyLoad>

      <ParagraphContainer>
        <ParagraphTitle>The year 2020</ParagraphTitle>
        <p>
          I will tell you an incredible story, the story of how I
          &quot;met&quot; web development.{" "}
          <EffectText>camera&nbsp;flashback</EffectText>
        </p>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2015</ParagraphTitle>
        <p>
          When I first learned Pascal back in highschool, I knew...{" "}
          <EmphasizedText>I was bad at programming.</EmphasizedText> I had a
          hard time expressing what I wanted to the&nbsp;machine.
        </p>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2017</ParagraphTitle>{" "}
        <p>
          {" "}
          I came across the webdev subreddit, which was{" "}
          <EmphasizedText>
            full of amazing things people could do on the web.
          </EmphasizedText>{" "}
          Out of curiosity, I learned HTML and CSS, but quickly moved on after
          boxes refused to be&nbsp;centered.
        </p>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2018</ParagraphTitle>{" "}
        <p>
          Eventually, I still picked IT as my major since computers were what I
          was most familiar with. To get myself prepared for college, I attended
          a beginner class for programming. They taught me C#, and I could say{" "}
          <EmphasizedText>
            I did not do any better than I did with&nbsp;Pascal.
          </EmphasizedText>
        </p>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2019</ParagraphTitle>
        <p>
          Believing that anything can be achieved with enough willpower, I
          passed all courses with an A or higher.{" "}
          <EmphasizedText>
            But something was defnitely missing. It was... passion.
          </EmphasizedText>{" "}
          I had planned to switch to Hospitality because of how much I liked to
          interact with people, but <em>the universe</em> told me not to. In my
          second semester, a friend invited me to join her in one lecture.
          Little did I know, my whole life just turned to a new&nbsp;chapter.
        </p>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Now</ParagraphTitle> To this day, I am still deeply
        grateful to {/* TODO added David Humphrey achievement */}
        <a
          href="https://twitter.com/humphd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          the professor
        </a>{" "}
        who invoked my curiosity for web once more.{" "}
        <EmphasizedText>
          All the things that I once could not stand, are now knowledge that I
          cannot get enough of.
        </EmphasizedText>{" "}
        Web development is addicting, build one site and I cannot help but build
        a better one. Sometimes, it feels frightening with so many things are
        going on in the world of web, but seeing my favorite stacks get updated,
        or all the shiny new toys I can play with, are just some of the good
        vibes to wake up&nbsp;to.
      </ParagraphContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>`
  & > *:not(:last-child) {
    ${tw`mb-5`}
  }
`;

type ThumbnailContainerProps = {};
const ThumbnailContainer = styled.div<ThumbnailContainerProps>`
  position: relative;

  :hover {
    img {
      transform: scale(1);
      filter: blur(1rem);
    }
  }
`;

type ThumbnailTitleProps = {};
const ThumbnailTitle = styled.h3<ThumbnailTitleProps>`
  ${tw`absolute top-1/2 left-0 transform -translate-y-1/2 text-center text-primary w-full font-hBold font-heading uppercase`};

  font-size: 1.5em;
  background: rgba(var(--text-color-rgb), 0.8);
  padding: 0.25em 0;

  @media screen and (min-width: ${(p) =>
      p.theme.breakpoints[GlobalStyling.AppBarBreakpoint]}) {
    font-size: 2em;
  }
`;

const Thumbnail = styled(ResponsiveImage)`
  ${tw`overflow-hidden rounded`}

  img {
    width: 100%;
    height: 35vw;
    object-fit: cover;
    filter: blur(0.3rem);
    transform: scale(1.1);

    transition: transform 300ms ease, filter 300ms linear;
  }
`;

type ParagraphConainer = {};
const ParagraphContainer = styled.div<ParagraphConainer>``;

type ParagraphTitleProps = {};
const ParagraphTitle = styled.h4<ParagraphTitleProps>`
  ${tw`text-ltextColor block relative flex items-center`}

  ::before {
    content: "";
    height: 1px;
    width: 2rem;
    display: inline-block;

    /* NOTE inherit color is important for currentColor */
    color: inherit;
    ${tw`bg-current mr-2`}
  }
`;

type EffectTextProps = {};
const EffectText = styled.span<EffectTextProps>`
  ${tw`text-ltextColor italic`}
`;

type EmphasizedTextProps = {};
const EmphasizedText = styled.span<EmphasizedTextProps>`
  ${tw`italic text-accent`}
`;

export { Roadmap };
