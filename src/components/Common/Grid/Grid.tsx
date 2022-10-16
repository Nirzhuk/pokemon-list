import styled from "styled-components";

export interface GridProps {
  width?: string;
  hasShadow?: boolean;
  margin?: string;
  centered?: boolean;
  grid?: string;
  gridRow?: string;
  gap?: string
  background?: boolean;
}

const Grid = styled.div<GridProps>`
  width: ${({ width }) => width};
  display: grid;
  grid-template-columns: ${({ grid }) => grid};
  grid-template-rows:${({ gridRow }) => gridRow};
  grid-gap: ${({ gap }) => gap};
  ${({ hasShadow }) =>
    hasShadow &&
    `
    border-radius: 8px;
    padding: 12px 8px;
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);`}
  ${({ margin }) => margin && `margin:${margin};`}
  ${({ centered }) => centered && `margin: 0 auto;`}
  ${({ background, theme }) => background && `background-color: ${theme.body}`}
`;

Grid.defaultProps = {
  width: "auto",
  hasShadow: false,
};

export default Grid;
