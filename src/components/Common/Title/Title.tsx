import React, { ReactNode } from "react";
import styled from "styled-components";
import { TextAligment } from "../../../modules/app/types";

export interface TitleProps {
    align?: TextAligment;
    size?: string;
    as?: string;
}

const Title = styled.h1<TitleProps>`
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size};
`;

export default Title;

Title.defaultProps = {
    align: TextAligment.left,
    size: '48px',
    as: 'h1'
};
