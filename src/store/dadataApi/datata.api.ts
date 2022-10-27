import { RootObject } from './../../types/serverModels';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IAddress } from '../../types/serverModels';
const token = 'cc1b33769cf0d5092307393c3379243b4b1b5deb';
export const dadataApi = createApi({
    reducerPath: 'dadata/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/'
    }),
    endpoints: build => ({
        fetchAddresses: build.mutation<IAddress[], string>({
            query: (query:string) => ({
                url: 'address',
                method: 'POST',
                params: {
                    q: query,
                    count: 20
                },
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({query:query})
            }),
            transformResponse: (response:RootObject) => response.suggestions
            
        })

    })
})
export const {useFetchAddressesMutation} = dadataApi;