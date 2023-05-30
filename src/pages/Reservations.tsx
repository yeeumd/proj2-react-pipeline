import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ReservationsList from '../components/ReservationsList'
import { UserType } from '../api/userApi';

export default function Reservations() {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Reservations" subtitle="home away from home">
          <Link to="/rooms" className="btn-primary">
            search for additional rooms
          </Link>
        </Banner>
        <div>user email</div>
        <div>user</div>
      </Hero>
    {/* <ReservationsList /> */}
    </>
  )
}

