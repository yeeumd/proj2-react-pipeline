import { RoomType, useCreateRoomMutation, useDeleteRoomMutation, useGetAllRoomsQuery} from '../api/roomApi';
import Loading from './Loading'
import Error from '../pages/ErrorPage';
import { useEffect, useState, useRef } from 'react';
import { RoomEdit } from './RoomEdit';

export default function RoomsEdit() {
  const { data: rooms, error, isLoading, refetch }  =  useGetAllRoomsQuery(); 
  const [createRoom] = useCreateRoomMutation(); 
  const [deleteRoom] = useDeleteRoomMutation();
  const typeRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const pictureUrlRef = useRef<HTMLInputElement>(null);

  if (isLoading) {
    // return <Loading />
    <div>Loading...</div>
  }
  if (error) {
    return <div>Error Message</div>
  }
  function handleSubmit(event: any) {
    event.preventDefault();  // to prevent page refreshes
    const newRoom : RoomType = {
      // id: 1,
      roomType: String(typeRef?.current?.value),
      roomNumber: String(numberRef?.current?.value),
      price: Number(priceRef?.current?.value),
      pictureUrl: String(pictureUrlRef?.current?.value)

    }
    createRoom(newRoom)
      .unwrap()
      .then(() => refetch()); // Refetch the stores 
  }

  function handleDelete(id: number) {
    deleteRoom(id)
      .unwrap()
      .then(() => refetch());
  }

  return (
      <>
        <div>Room Editor section</div>
        <form onSubmit={handleSubmit}>
                Name: <input ref={typeRef} />
                Number: <input ref={numberRef}/>
                Price: <input ref={priceRef} />
                PictureUrl: <input ref={pictureUrlRef} />
                <button>Create Room</button>
        </form> 

        {rooms?.map(room => {
              return(
                <RoomEdit key={room.id} room={room} handleDelete={handleDelete}>

                </RoomEdit>)
      })}
      </>
    );
}

/*
add mui icons

*/