import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { Move } from '../../../../../modules/pokemons/types';
import PokemonPageCardInfoMovesListItem from './PokemonPageCardInfoMovesListItem';

interface PokemonPageCardInfoMovesListProps {
    initialMoves: Move[]
}

const ListContainer = styled.div`
    height:400px;
    overflow: scroll;
    border: 1px solid #202020;
    box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
    border-radius: 8px;
    padding: 10px;
    margin:5px;
`

const PokemonPageCardInfoMovesList = ({ initialMoves }: PokemonPageCardInfoMovesListProps) => {

    const [moves, setMoves] = useState(initialMoves.sort((a, b) => a.move.url.localeCompare(b.move.url)))

    const deleteMoveFromList = useCallback(
        (name: string) => setMoves((prevMoves) => prevMoves.filter((item) => item.move.name !== name)),
        [],
    )

    return (
        <div>
            <h3>Moves</h3>
            <ListContainer >
                {moves.map((mo) => {
                    return (
                        <PokemonPageCardInfoMovesListItem
                            key={mo.move.name}
                            name={mo.move.name}
                            onDeleteMove={deleteMoveFromList} />
                    );
                })}
            </ListContainer>

        </div>
    )
}

export default PokemonPageCardInfoMovesList