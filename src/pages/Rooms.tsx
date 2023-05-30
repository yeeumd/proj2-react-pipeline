// import { Room as RoomType, useGetAllRoomsQuery } from '../api/roomApi';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import RoomFilter from "../components/RoomsFilter";

export default function Rooms() {
//   const { data: rooms, refetch, isLoading } = useGetAllRoomsQuery();
// console.log(rooms);
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="home away from home">
          <Link to="/home" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomFilter />
    </>
  );

}

/*
import { Room as RoomType, useGetAllRoomsQuery } from '../api/roomApi';
import Room from '../components/Room';
import Loading from '../components/Loading';


// Use RTK Query to fetch the data from the backend here
// Then map over the array to display a bunch of Room components

export default function Rooms() {
  const { data: rooms, refetch, isLoading } = useGetAllRoomsQuery();

  if (isLoading) {
    // TODO: Create a loading spinner using MUI
    return <Loading />
  }

  return (
    <>
    <div>room</div>
      {rooms?.map(room => {
        return (
          <Room key={room.id} room={room} />
        );
      })}
    </>
  )
}
*/