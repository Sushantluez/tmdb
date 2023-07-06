import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import {
  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from 'formik';




const Header = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/searchmovie/${val.query}`);
      resetForm();
    }
  });
  const [show, setShow] = useState(false);
  return (
    <header className="bg-black  text-white flex justify-between px-7 py-2 items-baseline pt-5">
      <div>
        <NavLink to='/' replace> <h1 className="text-xl mb-2">MoviesCounter</h1></NavLink>

        {show && <nav className="msm:flex hidden flex-col space-y-2  ">

          <NavLink to='/meal/show'>Meal Show</NavLink>
          <NavLink to='/movie/now_playing'>NowPlaying</NavLink>
          <NavLink to='/movie/popular'>Popular</NavLink>
          <NavLink to='/movie/top_rated'>Top_Rated</NavLink>
          <NavLink to='/movie/upcoming'>Upcoming</NavLink>

          <form onSubmit={formik.handleSubmit}>

            <div className=" relative flex w-full gap-2 mmd:w-max">
              <Input
                type="search"
                label="Type here..."
                className="pr-20"
                name='query'
                onChange={formik.handleChange}
                value={formik.values.query}

                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button type='submit'
                size="sm" className="!absolute right-1 top-1 rounded">
                Search
              </Button>
            </div>
          </form>

        </nav>
        }



      </div>


      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden msm:flex"></i> : <i className="fa-solid fa-bars hidden msm:flex"></i>}

      </button>
      <nav className="msm:hidden space-x-5 flex items-center">
        <NavLink to='/meal/show'>Meal Show</NavLink>
        <NavLink to='/movie/now_playing'>NowPlaying</NavLink>
        <NavLink to='/movie/popular'>Popular</NavLink>
        <NavLink to='/movie/top_rated'>Top_Rated</NavLink>
        <NavLink to='/movie/upcoming'>Upcoming</NavLink>

        <form onSubmit={formik.handleSubmit}>

          <div className=" msm:hidden relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Type here..."
              className="pr-20"
              name='query'
              onChange={formik.handleChange}
              value={formik.values.query}

              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button type='submit'
              size="sm" className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
        </form>
      </nav>
    </header>
  )
}
export default Header