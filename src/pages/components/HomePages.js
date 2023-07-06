import React from 'react'
import { useNowPlayingQuery } from '../features/movieApi'
import { useNavigate } from 'react-router';

const HomePages = () => {

  const { data, isLoading, isError, error } = useNowPlayingQuery();


  const nav = useNavigate();




  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_w4fowfzp.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  if (error) {
    return <div className='font-bold text-5xl text-center animate-pulse text-green-600 pt-10'>Something Went Wrong</div>
  }

  // console.log(data.results[0].id);






  return (
    <div>
      <div className='grid grid-cols-4 gap-5 p-6 msm:grid-cols-2 mmd:grid-cols-3'>
        {data.results.map((movie) => {
          return <div onClick={() => nav(`/movie/detail/${movie.id}`)} key={movie.id} className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg'>
            <img className='h-[400px] w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />

            <div className='p-3 space-y-2'>
              <h1 className='text-xl font-bold'>{movie.title}</h1>
              <p>{movie.overview.substring(0, 150) + '...'}</p>
            </div>

          </div>
        })}

      </div>

    </div>
  )
}

export default HomePages