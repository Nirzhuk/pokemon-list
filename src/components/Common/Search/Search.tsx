import React from 'react'
import { Search as SearchIcon } from "react-feather";
import styled from 'styled-components';
import Paragraph from '../Paragraph';


const SearchContainerStyled = styled.div`
    position:relative;
`;

const SearchIconStyled = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

const StyledInput = styled.input`
    padding: 12px 12px 12px 52px;
    font-family: monospace;
    flex: 1 1 0%;
    box-shadow: none;
    color: #000;
    background-color: #f7f7f7;
    border: 1px solid #d2d2d2;
    margin: 0px;
    font-size: inherit;
    line-height: 1;
    appearance: none;
    outline: 0px;
    border-radius: 6px;
    &:focus {
        background: transparent;
                    border: 1px solid #636363;
    }
    &:hover {
            border: 1px solid #636363;
    }
`;

const StyledLegend = styled(Paragraph)`
    font-size: 90%;
    font-weight: 600;
    margin-left: 10px;
`
export interface SearchProps {
    legend?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    value?: string;
    placeholder: string;
}

const Search = ({ legend, ...props }: SearchProps) => {
    return (
        <>
            {legend && <StyledLegend as="label">{legend}</StyledLegend>}
            <SearchContainerStyled>
                <SearchIconStyled><SearchIcon size="18px" /></SearchIconStyled>
                <StyledInput {...props} />
            </SearchContainerStyled>
        </>
    )
}

export default Search
