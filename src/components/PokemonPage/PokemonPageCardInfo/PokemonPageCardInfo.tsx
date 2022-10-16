import React from 'react'
import styled from 'styled-components'
import { Form, Pokemon } from '../../../modules/pokemons/types'
import PokemonPageCardInfoImageSection from './PokemonPageCardInfoImageSection';
import PokemonPageCardInfoDataSection from './PokemonPageCardInfoDataSection/PokemonPageCardInfoDataSection';

export interface PokemonPageCardInfoProps {
  data: Pokemon
  formsData: Form[]
}

const PokemonPageCardInfoContainer = styled.section`
  display: grid;
  border-radius: 8px;
  border: 1px solid #202020;
  box-shadow: 5px 5px 0px rgba(0,0,0,0.2);
  width: 750px;
  grid-template-columns: 150px 1fr;
`

const PokemonPageCardInfo = ({ data, formsData }: PokemonPageCardInfoProps) => {
  return (
    <PokemonPageCardInfoContainer>
      <PokemonPageCardInfoImageSection sprite={data.sprites.back_default}/>
      <PokemonPageCardInfoDataSection data={data} forms={formsData}/>
    </PokemonPageCardInfoContainer>
  )
}

export default PokemonPageCardInfo

