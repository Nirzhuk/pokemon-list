import fetch from 'isomorphic-fetch'

export const fetcher = (url:string) => fetch(url).then((res) => res.json().catch(()=> null));
