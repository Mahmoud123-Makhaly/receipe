import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
 import Home from './Pages/Home'
import Cussine from './components/cussine/Cussine';
import Category from './components/category/Category';
import Navs from './components/Navs/Navs';
import Search from './components/search/Search';
 import Details from './components/Details/Details';
import Searched from './components/searched/Searched';
 const App = () => {
   return (
    <div>
    <Navs/>
    <Search/>
    <Category/>
   
    <Routes  >
 <Route path='/cussine/:type' element={<Cussine/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/searched/:search' element={<Searched/>}/>
<Route path='/details/:id' element={<Details/>}/>
</Routes>
    

    </div>
  )
}

export default App
