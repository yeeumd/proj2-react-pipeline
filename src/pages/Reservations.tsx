import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import ReservationsList from '../components/ReservationsList'

export default function Reservations() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Reservations" subtitle="home away from home">
          <Link to="/rooms" className="btn-primary">
            search
          </Link>
        </Banner>
      </Hero>
    {/* <ReservationsList /> */}
    </>
  )
}