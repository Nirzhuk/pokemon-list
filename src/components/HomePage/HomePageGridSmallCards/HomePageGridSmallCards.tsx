import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components'
import capitalize from '../../../modules/app/helpers/formatters/capitalize';
import { APIURLReference, TextAligment } from '../../../modules/app/types';
import Title from '../../Common/Title';
import SmallCard from '../../SmallCard';

const HomePageGridSmallCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export interface HomePageGridSmallCardsProps {
    data: APIURLReference[]
}

const HomePageGridSmallCards = ({ data }: HomePageGridSmallCardsProps) => {
    const router = useRouter();

    const goToPokemonPageRoute = (pokemonName: string) => {
        router.push(`/${pokemonName}`)
    }

    if (data.length === 0) {
        return (<div>
            <Title as="h3" align={TextAligment.center} size="28px">There&apos; s not pokemons with that name, let&apos; s catch them ;)</Title>
        </div>)
    }
    return (
        <HomePageGridSmallCardsContainer>
            {data.map((i: APIURLReference) => <SmallCard onClick={() => goToPokemonPageRoute(i.name)} text={capitalize(i.name)} key={i.name} />)}
        </HomePageGridSmallCardsContainer>
    )
}

export default HomePageGridSmallCards