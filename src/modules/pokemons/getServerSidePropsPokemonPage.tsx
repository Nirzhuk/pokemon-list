
import { GetServerSidePropsContext } from 'next'
import { fetcher } from '../app/helpers/api'
import { APIURLReference } from '../app/types'
import { getPokemonDataUrl } from './api'
import { Pokemon } from './types'

const getServerSidePropsPokemonPage = async ({ query }: GetServerSidePropsContext) => {
    const data: Pokemon = await fetcher(getPokemonDataUrl(query.pokemonName as string))

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const formsData = await Promise.all(data.forms.map(async (form: APIURLReference) => {
        return await fetcher(form.url);
    }));

    return {
        props: {
            data,
            formsData
        }
    }
}

export default getServerSidePropsPokemonPage