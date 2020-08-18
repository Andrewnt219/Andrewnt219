import styled from "styled-components";

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
  --flex-margin: 1rem;
  margin-top: calc(${(p) => p.mt ?? "0"} - var(--flex-margin));
  & > * {
    margin-top: var(--flex-margin);
  }
`;
