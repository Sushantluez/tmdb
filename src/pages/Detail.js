import React from 'react'
import { useParams } from 'react-router';
import { useMovieByidQuery, useMovievedioQuery } from './features/movieApi';

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovievedioQuery(id);
  const { data: dat, isLoading: load, isError: isE, error: err } = useMovieByidQuery(id);

  if (isLoading || load) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  console.log(dat)

  if (error) {
    return <div className='text-red-600 font-bold text-5xl text-center animate-pulse pt-10'>Something Went Wrong</div>
  }


  return (
    <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${dat.poster_path}')` }} className=' bg-no-repeat w-[100vw] h-[89.5vh] bg-cover sticky '  >
      <div className=' py-5 space-y-5 max-w-6xl mx-auto'>
        <h1 className='text-white text-center text-3xl font-bold'>{dat.title}</h1>
        <iframe width="560" height="315 " className='mx-auto mt-11' src={`https://www.youtube.com/embed/${data.results[0]?.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p className='text-white'>{dat.overview}</p>
      </div>
    // </div >
  )
}

export default Detail