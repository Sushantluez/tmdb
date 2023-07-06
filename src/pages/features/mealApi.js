import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }),
  endpoints: (builder) => ({

    getCategoryFood: builder.query({
      query: () => ({
        url: '/categories.php',
        method: 'GET'
      })

    }),


  }),







});

export const { useGetCategoryFoodQuery } = mealApi;