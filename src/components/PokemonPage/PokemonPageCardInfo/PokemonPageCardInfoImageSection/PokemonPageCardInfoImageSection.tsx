import { useRouter } from 'next/router';
import { ArrowLeft as ArrowLeftIcon } from "react-feather";
import React from 'react'
import styled from 'styled-components';

export interface PokemonPageCardInfoImageSectionProps {
    sprite: string
}

const PokemonPageCardInfoImageSectionContainer = styled.div`
  padding: 20px;
  margin-right: 25px;
`;

const ArrowLeftIconStyled = styled(ArrowLeftIcon)`
    &:hover {
        cursor: pointer;
    }
`


const PokemonPageCardInfoImageSection = ({ sprite }: PokemonPageCardInfoImageSectionProps) => {
    const router = useRouter();
    const goBackPokemonList = () => router.push('/')

    return (
        <PokemonPageCardInfoImageSectionContainer>
            <ArrowLeftIconStyled onClick={goBackPokemonList} />
            <img src={sprite} alt="Pokemon Sprite" />
        </PokemonPageCardInfoImageSectionContainer>
    )
}

export default PokemonPageCardInfoImageSection