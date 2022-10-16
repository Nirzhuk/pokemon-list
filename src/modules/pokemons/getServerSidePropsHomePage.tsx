import { APIListWithPagination, APIURLReference } from '../app/types'
import { getPokemonsListUrl } from './api'
import { fetcher } from '../app/helpers/api'

const getServerSidePropsHomePage = async () => {
    const data: APIListWithPagination<APIURLReference> = await fetcher(getPokemonsListUrl())
    const newData = {
        ...data,
        results: data.results.sort((a, b) => a.name.localeCompare(b.name))
    }
    return {
        props: {
            initialData: data
        }
    }
}
export default getServerSidePropsHomePage