import React, { ReactElement, useState } from "react";
import tw, { styled } from "twin.macro";

type Props = {};

function Roadmap({}: Props): ReactElement {
  const [tldr, setTldr] = useState(false);
  return (
    <Container>
      <h3>Road to web development</h3>
      <button onClick={() => setTldr((prev) => !prev)}>TLDR</button>

      {tldr ? (
        <div>
          Initially, my mind was not really bright when it came to talking with
          machines. After going through lots of struggles with computer
          programming, and even once decided to switch my major despite good
          grades, I have finally found my passion in web development thanks to{" "}
          <a
            href="https://twitter.com/humphd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
            rel="noopener noreferrer"
          >
            a dedicated professor
          </a>
          . Building one page, and the next thing I know, I have several sites
          with each one{" "}
          <a
            href="https://how-i-met-your-mother.fandom.com/wiki/The_Over-Correction"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontStyle: "italic" }}
          >
            over-corrected
          </a>{" "}
          mistakes in the previous. With all the shiny new technology gets
          introduced daily, it is hard to not be excited when I wake up.
        </div>
      ) : (
        <div>
          <div>
            <p>
              <EffectText>The year 2020</EffectText> I will tell you an
              incredible story, the story of how I &quot;met&quot; web
              development <EffectText>camera flashback</EffectText>.
            </p>
            <p>
              <EffectText>Year 2015</EffectText> When I first learned Pascal
              back in highschool, I knew... I was bad at programming. I had a
              hard time expressing what I wanted to the machine.
            </p>
            <p>
              <EffectText>Year 2017</EffectText> I came across the webdev
              subreddit, which was full of amazing things people could do on the
              web. Out of curiosity, I learned HTML and CSS, but quickly moved
              on after boxes refused to be centered.
            </p>
            <p>
              <EffectText>Year 2018</EffectText> Eventually, I still picked IT
              as my major since computers were what I was most familiar with. To
              get myself prepared for college, I attended a beginner class for
              programming. They taught me C#, and I could say I did not do any
              better than I did with Pascal.
            </p>
            <p>
              <EffectText>Year 2019</EffectText> Believing that anything can be
              achieved with enough willpower, I passed all courses with an A or
              higher.{" "}
              <em style={{ color: "var(--accent-color)" }}>
                But something was defnitely missing. It was passion.
              </em>{" "}
              I had planned to switch to Hospitality because of how much I liked
              to interact with people, but <em>the universe</em> told me not to.
              To this day, I am still deeply grateful to{" "}
              {/* TODO added David Humphrey achievement */}
              <a
                href="https://twitter.com/humphd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noopener noreferrer"
              >
                the professor
              </a>{" "}
              whose lecture I attended by chance that invoked my curiosity for
              web once more.
            </p>
            <p>
              <EffectText>Now</EffectText> All the things that I once could not
              stand, are now knowledge that I cannot get enough of. Web
              development is addicting, build one site and I cannot help but
              build a better one. Sometimes, it feels frightening with so many
              things are going on in the world of web, but seeing my favorite
              stacks get updated, or all the shiny new toys I can play, are just
              some of the good vibes to wake up with.
            </p>
          </div>
        </div>
      )}
    </Container>
  );
}

type EffectTextProps = {};
const EffectText = styled.span<EffectTextProps>`
  /* TODO add a background to text  in lightmode */
  ${tw`text-ltextColor`}
`;

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export { Roadmap };
