import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODkzNGFlZGY1M2Q5ZGNkNjlmYzU5Y2QwMWUzN2Q3YSIsInN1YiI6IjY0OWIxYjU5MGU1YWJhMDBlMmM2MWU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KCNY-fAy7u7Vns82ruIIgbI3lP7DWBBms_g2mgmcaCM';


export const movieApi = createApi({

  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({


    nowPlaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),

    moviebycategory: builder.query({
      query: (category) => ({
        url: `/movie/${category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),


    movievedio: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),

    searchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          query
        }
      })

    }),

    movieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          query,
          page: query.page
        }
      })

    }),
    movieByid: builder.query({
      query: (query) => ({
        url: `https://api.themoviedb.org/3/movie/${query}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },

      })

    })

  })

})




export const { useMoviebycategoryQuery, useNowPlayingQuery, useMovievedioQuery, useSearchMovieQuery, useMovieByPageQuery, useMovieByidQuery } = movieApi;