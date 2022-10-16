import { capitalize } from 'lodash';
import React, { memo, useCallback } from 'react'
import styled from 'styled-components';

interface PokemonPageCardInfoMovesListItemProps {
    name: string;
    onDeleteMove: (name: string) => void
}
const PokemonPageCardInfoMovesListItemStyled = styled.div`
    display:grid;
    margin: 10px;
    border-bottom: 1px solid #9b9b9b;
    grid-template-columns: 1fr max-content;
    align-items: center;
`;


const Icon = styled.span`
    margin-left: 10px;
    &:hover {
        cursor: pointer
    }
`


const PokemonPageCardInfoMovesListItem = ({ name, onDeleteMove }: PokemonPageCardInfoMovesListItemProps) => {
    const handleDeleteItem = useCallback(() => {
        onDeleteMove(name);
    }, [name, onDeleteMove]);
    return (
        <PokemonPageCardInfoMovesListItemStyled>
            {capitalize(name)}
            <Icon onClick={handleDeleteItem}>X</Icon>
        </PokemonPageCardInfoMovesListItemStyled>
    )
}

export default memo(PokemonPageCardInfoMovesListItem)