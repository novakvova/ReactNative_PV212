import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import {ICategoryItem} from "@/interfaces/category";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: createBaseQuery('categories'),
    tagTypes: ['Categories'],

    endpoints: (builder) => ({
        getCategories: builder.mutation<ICategoryItem[], string|null>({
            query: (token) => {
                return {
                    url: '',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer: ${token}`
                    },
                }
            },
        }),
    }),
})

export const { useGetCategoriesMutation } = categoryApi
