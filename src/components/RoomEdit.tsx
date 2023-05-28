import { RoomType, useCreateRoomMutation, useGetAllRoomsQuery } from '../api/roomApi';

// will move following to new page//
import { useEffect, useState, useRef } from 'react';
// more above to new page

// move the following to it's own page
const [createRoom] = useCreateRoomMutation();  //returns a function we can call anything we want
const typeRef = useRef<HTMLInputElement>(null);
const numberRef = useRef<HTMLInputElement>(null);

function handleSubmit(event: any) {
  event.preventDefault();  // to prevent page refreshes
  const newRoom : RoomType = {
    // id: 1,
    roomType: String(typeRef?.current?.value),
    roomNumber: String(numberRef?.current?.value)
  }
  createRoom(newRoom);
    // .unwrap()
    // .then(() => refetch()); // Refetch the stores 

// move above to new page

return (
    <>
    <form onSubmit={handleSubmit}>
            Name: <input ref={typeRef} />
            Number: <input ref={numberRef}/>
            <button>Create Room</button>
          </form>
    </>
  )
};