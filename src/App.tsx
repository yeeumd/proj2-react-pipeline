// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useGetAllRoomsQuery } from './api/roomApi'
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import EditData from './pages/EditData';
import Login from './pages/Login';

import ReservationFilter from './components/RoomsFilter';
import Reservations from './pages/Reservations';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Rooms />}></Route>
        <Route path = "/filter" element = {<ReservationFilter />}></Route>
        <Route path = '/home' element = {<Home />}></Route>
       <Route path = '/rooms' element = {<Rooms />}></Route>
       <Route path = '/rooms/:slug' element = {<SingleRoom />}></Route>
       {/* <Route path = '/rooms/${id}' element = {<SingleRoom />}></Route> */}
       <Route path = "/error" element = {<ErrorPage />}></Route>
       <Route path = '/edit' element = {<EditData />}></Route>
       <Route path = '/login' element = {<Login />}></Route>
       <Route path = '/reservations' element = {<Reservations />}></Route>
       <Route path = "*" element = {<ErrorPage />}></Route>
      </Routes>
    </>
  )
}

export default App
