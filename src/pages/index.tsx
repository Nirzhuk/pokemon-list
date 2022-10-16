import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import Grid from '../components/Common/Grid'
import PageContainer from '../components/Common/PageContainer'
import Search from '../components/Common/Search'
import Title from '../components/Common/Title'
import HomePageGridSmallCards from '../components/HomePage/HomePageGridSmallCards'
import useDebounce from '../hooks/useDebounce'
import { APIListWithPagination, APIURLReference } from '../modules/app/types'
import getServerSidePropsHomePage from '../modules/pokemons/getServerSidePropsHomePage'

interface HomePageProps {
  initialData: APIListWithPagination<APIURLReference>
}

export const getServerSideProps = getServerSidePropsHomePage

const Home = ({ initialData }: HomePageProps) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useDebounce(
    () => {
      setDebouncedValue(searchTerm);
    },
    400,
    [searchTerm]
  );

  // The first idea was to make a smart-search with api but it seems pokeapi doesn't have query option and cache volatible data isn't a good practice.
  const filteredData = useMemo(() => initialData.results.filter((poke) => poke.name.includes(debouncedValue)), [initialData, debouncedValue])

  const goToPokemonPageRoute = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/${(event.currentTarget.elements.namedItem('pokemonName') as HTMLInputElement).value}`)
  }

  return (
    <div >
      <Head>

        <title>Pokemon App</title>
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <>
        <PageContainer>
          <Title>
            Welcome to Pokemon Center
          </Title>
          <Grid grid="1fr 1fr" gap="20px">
            <div>
              <Search
                legend="Find pokemon in list"
                name="name"
                onChange={({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
                  setSearchTerm(currentTarget.value)
                }}
                value={searchTerm}
                placeholder="Search by name"
              />
            </div>

            <form onSubmit={goToPokemonPageRoute}>
              <Search
              legend="Find specific pokemon"
              name="pokemonName"
                placeholder="Search by name"
              />
              <button type='submit'>Buscar</button>
            </form>

          </Grid>
          <hr/>
          <HomePageGridSmallCards data={filteredData} />
        </PageContainer>
      </>
    </div>
  )
}

export default Home
