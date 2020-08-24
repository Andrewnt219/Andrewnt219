import { styled } from "twin.macro";

type RowProps = {
  justify?:
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center"
    | "flex-start"
    | "flex-end"
    | "strech";
  gap?: string;
  mt?: string;
};
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(p) => p.justify};

  & > *:not(:last-child) {
    margin-right: ${(p) => p.gap};
  }

  /* only has margin when flex is wrapped */
  margin-top: calc(${(p) => p.mt ?? "0"} - ${(p) => p.gap});
  & > * {
    margin-top: ${(p) => p.gap};
  }
`;
