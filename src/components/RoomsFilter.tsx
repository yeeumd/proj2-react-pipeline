// import React from "react";
// import { RoomType, useGetAllRoomsQuery} from '../api/roomApi';
// import Loading from './Loading'
// import Error from '../pages/ErrorPage';
// import { useEffect, useState, useRef } from 'react';

// import Title from "./Title";

// // export const RoomEdit = ({room, handleDelete}: RoomProps) => {
// //     const [isEdit, setIsEdit] = useState(false);
// //     const [inputType, setInputType] = useState(room.roomType);

// //     if (isEdit) {
// //         return (
// //             <div className='container'>
// //                 <input value={room.roomType} onChange={e => setInputType(e.target.value)} />
// //                 <input value={room.roomNumber} />
// //                 <button onClick={() => setIsEdit(false)}>Cancel Edit</button>
// //             </div>
// //         )
// //     }

// //     return (
// //         <div className='container'>
// //             <h2 className='room-details'>{room.roomType}</h2>
// //             <h3 className='room-details'>{room.roomNumber}</h3>
// //             <button className='room-details' onClick={() => setIsEdit(true)}>Edit</button>
// //             <button className='room-details' onClick={() => handleDelete(room.id)}><DeleteIcon />Delete</button>
// //         </div>
// //     )
// // get all unique values
// const getUnique = (items:RoomType[], value:string) => {
//   return [...new Set(items.map(item => item[value]))];
// };


// // function handleChange(event: any) {
// //     event.preventDefault();  // to prevent page refreshes
// //     if (type !== "all") {
// //         tempRooms = tempRooms.filter(room => room.type === type);
// //       }
// //     // const newRoom : RoomType = {
// //       // id: 1,
// //     //   roomType: String(typeRef?.current?.value),
// //     //   price: Number(priceRef?.current?.value),
// //     //   pictureUrl: String(pictureUrlRef?.current?.value)
// //     // }
// // }
// const RoomsFilter = () => {
//     const { data: rooms, error, isLoading, refetch }  =  useGetAllRoomsQuery(); 
//     console.log("inside filter " + rooms);
//     let maxPrice = Math.max(...rooms.map(item => item.price));
//     let minPrice = Math.min(...rooms.map(item => item.price));
//     let tempRooms = [...rooms];
//     // setState({[name]: value },this.filterRooms);
// // const [isEdit, setIsEdit] = useState(false);
// //   const [type, setType] = useState("all");
// const [price, setPrice] = useState(0);
// //   const [minPrice, setMinPrice] = useState(0);
// //   const [maxPrice, setMaxPrice] = useState(0);
//   // react hooks
// //   const context = useContext(RoomContext);
// //   const {
// //     handleChange,
// //     type,
// //     capacity,
// //     price,
// //     minPrice,
// //     maxPrice,
// //     minSize,
// //     maxSize,
// //     breakfast,
// //     pets
// //   } = context;


//   // get unique types
//   let types = getUnique(rooms, "RoomType");
//   // add all
//   types = ["all", ...types];
//   // map to jsx
//   types = types.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));
//   // get unique capacity
// //   let people = getUnique(rooms, "capacity");
// //   people = people.map((item, index) => (
// //     <option key={index} value={item}>
// //       {item}
// //     </option>
// //   ));
//   return (
//     <section className="filter-container">
//       <Title title="search rooms" />
//       <form className="filter-form">
//         // select dates
//         <label htmlFor="start">Start Date:</label>

//         <input type="date" id="start" name="trip-start"
//        value="2018-07-22"
//        min="2023-05-027" max="2023-12-31"></input>

// <label htmlFor="end">End Date:</label>

// <input type="date" id="start" name="trip-start"
//        value="2023-07-22"
//        min="2023-01-01" max="2023-12-31">
//         // end dates
//         </input>
//         {/* select type */}
//         <div className="form-group">
//           <label htmlFor="type">room type</label>
//           <select
//             name="type"
//             id="type"
//             // onChange={handleChange}
//             className="form-control"
//             value={types}
//           >
//             {types}
//           </select>
//         </div>
//         {/* end of select type */}
//         {/* guests  */}
//         {/* <div className="form-group">
//           <label htmlFor="capacity">Guests</label>
//           <select
//             name="capacity"
//             id="capacity"
//             onChange={handleChange}
//             className="form-control"
//             value={capacity}
//           >
//             {people}
//           </select>
//         </div> */}
//         {/* end of guests */}
//         {/* room price */}
//         <div className="form-group">
//           <label htmlFor="price">room price ${price}</label>
//           <input
//             type="range"
//             name="price"
//             min={minPrice}
//             max={maxPrice}
//             id="price"
//             value={price}
//             // onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         {/* end of room price*/}
//         {/* size */}
//         {/* <div className="form-group">
//           <label htmlFor="price">room size </label>
//           <div className="size-inputs">
//             <input
//               type="number"
//               name="minSize"
//               value={minSize}
//               onChange={handleChange}
//               className="size-input"
//             />
//             <input
//               type="number"
//               name="maxSize"
//               value={maxSize}
//               onChange={handleChange}
//               className="size-input"
//             />
//           </div>
//         </div> */}
//         {/* end of select type */}
//         {/* extras */}
//         {/* <div className="form-group">
//           <div className="single-extra">
//             <input
//               type="checkbox"
//               name="breakfast"
//               id="breakfast"
//               checked={breakfast}
//               onChange={handleChange}
//             />
//             <label htmlFor="breakfast">breakfast</label>
//           </div>
//           <div className="single-extra">
//             <input
//               type="checkbox"
//               name="pets"
//               checked={pets}
//               onChange={handleChange}
//             />
//             <label htmlFor="pets">pets</label>
//           </div>
//         </div> */}
//         {/* end of extras type */}
//       </form>
//     </section>
//   );
// };

// export default RoomsFilter;

// import React, { useState } from "react";
// import { RoomType } from '../api/roomApi';
// import Loading from './Loading';
// import Error from '../pages/ErrorPage';
// import {useGetAllReservationsQuery} from '../api/reservationApi'

// export type Reservation = {
//   id: number;
//   user: string;
//   hotelRoom: RoomType;
//   reservationStatus: string;
//   reservationTime: Date;
//   startDate: Date;
//   endDate: Date;
// };

// const ReservationFilter: React.FC = () => {
//   const { data: reservations, isLoading, error } = useGetAllReservationsQuery();
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const date = event.target.valueAsDate;
//     setStartDate(date);
//   };

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const date = event.target.valueAsDate;
//     setEndDate(date);
//   };

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (error) {
//     return <Error />;
//   }

//   const filteredReservations = reservations?.filter((reservation: Reservation) => {
//     // Filter logic based on start and end dates
//     if (startDate && endDate) {
//       return reservation.startDate >= startDate && reservation.endDate <= endDate;
//     }
//     return true;
//   });

//   return (
//     <div>
//       <div>
//         <label>Start Date:</label>
//         <input type="date" value={startDate ? startDate.toISOString().split('T')[0] : ''} onChange={handleStartDateChange} />
//       </div>
//       <div>
//         <label>End Date:</label>
//         <input type="date" value={endDate ? endDate.toISOString().split('T')[0] : ''} onChange={handleEndDateChange} />
//       </div>
//       <ul>
//         {filteredReservations?.map((reservation: Reservation) => (
//           <li key={reservation.id}>
//             Reservation ID: {reservation.id}<br />
//             User: {reservation.user}<br />
//             Room Tyle: {reservation.hotelRoom.roomType}<br />
//             Start Date: {reservation.startDate.toISOString().split('T')[0]}<br />
//             End Date: {reservation.endDate.toISOString().split('T')[0]}<br />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReservationFilter

import React, { useState } from "react";
import { RoomType, useGetAllRoomsQuery } from '../api/roomApi';
import Loading from './Loading';
import Error from '../pages/ErrorPage';
import Title from '../components/Title'

const RoomFilter: React.FC = () => {
  const { data: rooms, isLoading, error } = useGetAllRoomsQuery();
  const [roomType, setRoomType] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const handleRoomTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoomType = event.target.value;
    setRoomType(selectedRoomType !== "" ? selectedRoomType : null);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(event.target.value);
    setMaxPrice(!isNaN(price) ? price : null);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    // return <div>Error Message</div>;
    return <Error />
  }

  const filteredRooms = rooms?.filter((room: RoomType) => {
    // Filter logic based on room type and max price
    if (roomType && maxPrice) {
      return room.roomType === roomType && room.price <= maxPrice;
    } else if (roomType) {
      return room.roomType === roomType;
    } else if (maxPrice) {
      return room.price <= maxPrice;
    }
    return true;
  });

  return (
    <section className="filter-container">
    <Title title="search rooms" />
    <form className="filter-form">

      <div className="form-group">
        <label htmlFor="type">Room Type:</label>
        <select value={roomType || ""} 
            name="type"
            id="type"
            onChange={handleRoomTypeChange}>
            className="form-control"
          <option value="">All</option>
          {/* Add other room type options */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">Max Price:</label>
        <input type="number" value={maxPrice || ""} onChange={handleMaxPriceChange} />
      </div>
      <ul>
        {filteredRooms?.map((room: RoomType) => (
          <li key={room.id}>
            Room Number: {room.roomNumber}<br />
            Room Type: {room.roomType}<br />
            Price: {room.price}<br />
            Picture: <img src={room.pictureUrl} alt="Room" /><br />
          </li>
        ))}
      </ul>

    </form>
    </section>

  );
};

export default RoomFilter;
