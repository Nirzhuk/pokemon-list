import { capitalize } from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { Form, Pokemon } from '../../../../modules/pokemons/types'
import PokemonPageCardInfoMovesList from './PokemonPageCardInfoMovesList'

export interface PokemonPageCardInfoDataSectionProps {
    data: Pokemon
    forms: Form[]
}

const DataSection = styled.div`
  padding: 20px;
  border-radius: 0px 8px 8px 0px;
  background: #f3f3f3;
`

const FormCard = styled.div`
    background: #dddddd;
    padding: 20px;
    border: 1px solid #202020;
    border-radius: 8px;
`

const PokemonPageCardInfoDataSection = ({ data, forms }: PokemonPageCardInfoDataSectionProps) => {
    return (
        <DataSection>
            <h1>{capitalize(data.name)}</h1>
            <h3>Abilities:</h3>
            {data.abilities.map((ab) => ab.is_hidden === false && <li>{capitalize(ab.ability.name)}</li>)}

            <h3>Forms:</h3>
            <div>
                {forms.map((form) => {
                    return (
                        <FormCard key={form.id}>
                            <h3><strong>{capitalize(form.name)}</strong></h3>
                            <p> <strong>ID</strong>: {form.id} -
                                {form.is_battle_only ? ' Is only battle form' : ' Is not only battle form'}</p>
                        </FormCard>
                    )
                })}
            </div>
            <PokemonPageCardInfoMovesList initialMoves={data.moves} />
        </DataSection>
    )
}

export default PokemonPageCardInfoDataSection