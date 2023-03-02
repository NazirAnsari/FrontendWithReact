import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Posts from '../Components/Posts'
import Comments from '../Components/Comments'
import Users from '../Components/Users'

function CRoutes() {
  return (

  
    <BrowserRouter>
    <Routes>
        <Route path='posts' element={<Posts/>} />
        <Route path='comments' element={<Comments/>} />
        <Route path='users' element={<Users/>} />

    </Routes>
    </BrowserRouter>
  );

 }

export default CRoutes;
