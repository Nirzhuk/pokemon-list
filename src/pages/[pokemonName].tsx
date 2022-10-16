import Head from 'next/head'
import React from 'react'
import PageContainer from '../components/Common/PageContainer'
import PokemonPageCardInfo from '../components/PokemonPage/PokemonPageCardInfo'
import capitalize from '../modules/app/helpers/formatters/capitalize'
import getServerSidePropsPokemonPage from '../modules/pokemons/getServerSidePropsPokemonPage'
import { Form, Pokemon } from '../modules/pokemons/types'


interface PokemonPageProps {
  pokemonName: string;
  data: Pokemon
  formsData: Form[];
}

export const getServerSideProps = getServerSidePropsPokemonPage

const PokemonPage = ({ data, formsData }: PokemonPageProps) => {
  console.log(data)
  return (
    <>
    <Head>
        <title>{`${capitalize(data.name)} - Pokemon Page `} </title>
        <link rel="icon" href="/pokeball.png" />

    </Head>
      <PageContainer>
        <PokemonPageCardInfo data={data} formsData={formsData} />
      </PageContainer>
    </>

  )
}

export default PokemonPage