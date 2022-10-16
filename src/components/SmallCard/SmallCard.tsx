import React from 'react'
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    margin: 10px;
    padding: 8px 12px;
    text-align: center;
    border: 1px solid #202020;
    border-radius: 8px;

    &:hover {
        border-color: #444444;
        background: #e2e2e2;
        ${({ onClick }) => onClick && `cursor: pointer;`}
    }
`;

export interface SmallCardProps {
    text: string;
    onClick?: ()=> void;
}

const SmallCard = ({ text, onClick }: SmallCardProps) => <SmallCardContainer onClick={onClick}>{text}</SmallCardContainer>

export default SmallCard