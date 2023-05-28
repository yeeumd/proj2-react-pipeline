import React from 'react'
import RoomsEdit from '../components/RoomsEdit'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default function EditData() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="home away from home">
          <Link to="/home" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    <RoomsEdit />
    </>
  )
}
