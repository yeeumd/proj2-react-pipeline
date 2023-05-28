import { RoomType, useCreateRoomMutation, useGetAllRoomsQuery} from '../api/roomApi';
import Loading from './Loading'
import Error from '../pages/ErrorPage';
// import { fetchDataStart, selectLoading, selectData, selectError } from './dataSlice';
// import { useFindAllStoresQuery, Store, useCreateStoreMutation} from "./api/storeApi"
import { useEffect, useState, useRef } from 'react';

export default function RoomEdit() {
  const { data: rooms, error, isLoading, refetch }  =  useGetAllRoomsQuery(); 
  const [createRoom] = useCreateRoomMutation(); 
  const typeRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);



  // if (isLoading) {
  //   // return <Loading />
  //   <div>Loading...</div>
  // }
  // if (error) {
  //   return <Error />
  // }
  function handleSubmit(event: any) {
    event.preventDefault();  // to prevent page refreshes
    const newRoom : RoomType = {
      // id: 1,
      roomType: String(typeRef?.current?.value),
      roomNumber: String(numberRef?.current?.value)
    }
    createRoom(newRoom)
      .unwrap()
      .then(() => refetch()); // Refetch the stores 
  }

  return (
      <>
        <div>Room Editor section</div>
        <form onSubmit={handleSubmit}>
                Name: <input ref={typeRef} />
                Number: <input ref={numberRef}/>
                <button>Create Room</button>
        </form> 

        {rooms?.map(room => {
              return(
                <div key={room.id}>
                  <h2>{room.roomType}</h2>
                  <h3>{room.roomNumber}</h3>
                </div>)
      })}
      </>
    );
}