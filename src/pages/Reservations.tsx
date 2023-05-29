import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import ReservationsList from '../components/ReservationsList'

export default function Reservations() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="home away from home">
          <Link to="/home" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    <ReservationsList />
    </>
  )
}