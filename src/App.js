import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayOut from './pages/components/RootLayOut';
import HomePages from './pages/components/HomePages';
import Pagenotfound from './pages/components/Pagenotfound';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Search from './pages/Search';
import PageMovie from './pages/PageMovie';
import MealPage from './pages/MealPage/MealPage';




const App = () => {







  return (


    <div>
      <Routes>

        <Route path='/' element={<RootLayOut />}>


          <Route index element={<HomePages />} />



          <Route path='movie/:category' element={<Category />} />


          <Route path='movie/detail/:id' element={<Detail />} />

          <Route path='searchmovie/:search' element={<Search />} />

          <Route path='searchpage/:category/:page' element={<PageMovie />} />

          <Route path='meal/show' element={<MealPage />} />




          <Route path='*' element={<Pagenotfound />} />



        </Route>





      </Routes>



    </div>



  )
}

export default App














