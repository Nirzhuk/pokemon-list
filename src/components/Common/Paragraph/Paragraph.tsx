import styled from "styled-components";

export interface ParagraphProps {
    size?: string;
    color?: string;
    as?: string;
    bold?: boolean;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  ${({ bold }) => bold
        ? `font-weight: 600;`
        : ``}
`;

Paragraph.defaultProps = {
    size: "auto",
};

export default Paragraph;
