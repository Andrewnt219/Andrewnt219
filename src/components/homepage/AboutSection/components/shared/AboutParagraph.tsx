import tw, { styled } from "twin.macro";

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type TitleProps = {};
const Title = styled.h4<TitleProps>`
  ${tw`text-ltextColor block relative flex items-center`}

  font-size: 1.25em;
  margin-bottom: 0.25em;

  ::before {
    content: "";
    height: 1px;
    width: 1em;
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

const AboutParagraph = {
  EmphasizedText,
  EffectText,
  Title,
  Container,
};

export { AboutParagraph };
