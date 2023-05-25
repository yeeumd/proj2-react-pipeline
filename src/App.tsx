// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorPage from './pages/ErrorPage'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home />}></Route>
       <Route path = '/rooms' element = {<Rooms />}></Route>
       <Route path = '/rooms/:slug' element = {<SingleRoom />}></Route>
       <Route path = "*" element = {<ErrorPage />}></Route>
      </Routes>
    </>
  )
}

export default App
