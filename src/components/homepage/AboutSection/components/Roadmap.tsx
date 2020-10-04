import { GaCategories } from "@src/constants/ga.constants";
import { AchievementContext } from "@src/contexts/Achievement.context";

import { aboutThumbnails } from "@src/data/images.data";
import { useAnalytics } from "@src/hooks/useAnalytic";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import { styled } from "twin.macro";
import { AboutArticle } from "./shared/AboutArticle";
import { AboutParagraph } from "./shared/AboutParagraph";

function Roadmap(): ReactElement {
  /* ANCHOR tracking */
  const { trackEvent } = useAnalytics();

  /* ANCHOR Professor David achievement */
  const [professorDavidClicked, setProfessorDavidClicked] = useState<boolean>(
    false
  );
  const { queueAchievement } = useContext(AchievementContext);

  const professorDavidClickHandler = () => {
    setProfessorDavidClicked(true);
  };

  // Only show the achievement when the user go back to our page
  useEffect(() => {
    const visibilityHandler = () => {
      if (professorDavidClicked && document.visibilityState === "visible") {
        queueAchievement("professorDavid");
        trackEvent({
          action: "professor achieved",
          category: GaCategories.Achievements,
        });
      }
    };

    document.addEventListener("visibilitychange", visibilityHandler);

    return () => {
      document.removeEventListener("visibilitychange", visibilityHandler);
    };
  }, [queueAchievement, professorDavidClicked, trackEvent]);

  return (
    <AboutArticle thumbnail={aboutThumbnails["road-to-web-development"]}>
      <ParagraphContainer>
        <ParagraphTitle>The year 2020</ParagraphTitle>
        <Content>
          I will tell you an incredible story, the story of how I
          &quot;met&quot; web development.{" "}
        </Content>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2015</ParagraphTitle>
        <Content>
          When I first learned Pascal back in highschool, I knew...{" "}
          <EmphasizedText>I was bad at programming.</EmphasizedText> I had a
          hard time expressing what I wanted to the&nbsp;machine.
        </Content>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2017</ParagraphTitle>{" "}
        <Content>
          {" "}
          I came across the webdev subreddit, which was{" "}
          <EmphasizedText>
            full of amazing things people could do on the web.
          </EmphasizedText>{" "}
          Out of curiosity, I learned HTML and CSS, but quickly moved on after
          boxes refused to be&nbsp;centered.
        </Content>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2018</ParagraphTitle>{" "}
        <Content>
          Eventually, I still picked IT as my major since computers were what I
          was most familiar with. To get myself prepared for college, I attended
          a beginner class for programming. They taught me C#, and I could say{" "}
          <EmphasizedText>
            I did not do any better than I did with&nbsp;Pascal.
          </EmphasizedText>
        </Content>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Year 2019</ParagraphTitle>
        <Content>
          Believing that anything can be achieved with enough willpower, I
          passed all courses with an A or higher.{" "}
          <EmphasizedText>
            But something was defnitely missing. It was... passion.
          </EmphasizedText>{" "}
          I had planned to switch to Hospitality because of how much I liked to
          interact with people, but <em>the universe</em> told me not to. In my
          second semester, a friend invited me to join her in one lecture.
          Little did I know, my whole life just turned to a new&nbsp;chapter.
        </Content>
      </ParagraphContainer>

      <ParagraphContainer>
        <ParagraphTitle>Now</ParagraphTitle> To this day, I am still deeply
        grateful to{" "}
        <ProfessorDavid
          href="https://twitter.com/humphd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          //
          onClick={professorDavidClickHandler}
        >
          the professor
        </ProfessorDavid>{" "}
        who invoked my curiosity for web once more.{" "}
        <EmphasizedText>
          All the things that I once could not stand, are now knowledge that I
          cannot get enough of.
        </EmphasizedText>{" "}
        Web development is addicting, build one site and I cannot help but build
        a better one. Sometimes, it feels frightening with so many things are
        going on in the world of web, but seeing my favorite stacks get updated,
        or all the shiny new toys I can play with, are just some of the good
        vibes waking up&nbsp;to.
      </ParagraphContainer>
    </AboutArticle>
  );
}

const {
  Container: ParagraphContainer,
  EmphasizedText,
  Title: ParagraphTitle,
  Content,
} = AboutParagraph;

type ProfessorDavidProps = {};
const ProfessorDavid = styled.a<ProfessorDavidProps>`
  :hover,
  :focus {
    text-decoration: underline;
    outline: none;
  }
`;

export { Roadmap };
