import RoomsList from "./RoomsList";

export default function RoomsContainer() {
  // const { data: rooms, refetch, isLoading } = useGetAllRoomsQuery();

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <>
      <RoomsList />
    </>
  )
}


// import React from "react";
// import { withRoomConsumer } from "../context";
/*
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
// import RootState from "../store";
import { useSelector } from 'react-redux'

export function RoomContainer() {
//   const { loading, sortedRooms, rooms } = context;
const store = useSelector((store: any )=> store);
  if (store.loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={store.rooms} />
      <RoomsList rooms={store.sortedRooms} />
    </>
  );
}
*/
// wraps RoomContainer with 'withRoomConsumer'
// to get access to context
// export default withRoomConsumer(RoomContainer);