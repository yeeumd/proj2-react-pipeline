import React from 'react'
import { useGetAllReservationsQuery, ReservationType } from '../api/reservationApi'
import { RoomType } from '../api/roomApi'
import ReservationEdit from './ReservationEdit';


export default function ReservationsList() {
    const {data: reservations, error, isLoading } = useGetAllReservationsQuery();
    // const room = {
    //     id = 1,
    //     roomNumber: string = '2',
    //     roomType: string = "basic",
    //     availabilityStatus: "Y",
    //     price: number = 100,
    //     pictureUrl: "room-1.jpeg"
    // }
    // const reservation1:ReservationType = {
    //     id: number = 1,
    //     user: string = "test",
    //     hotelRoom: RoomType = room,
    //     reservationStatus: string;
    //     reservationTime: Date;
    //     startDate: Date;
    //     endDate: Date;
    // }
  return (
    <section className="roomslist">
    <div className="roomslist-center">
      {/* {reservations.map(item => {
        return <ReservationEdit key={item.id} item={item} />;
      })} */}
        {reservations.map(item => {
        return (
          <section className="roomslist">
            <div className="roomslist-center">
          <ReservationEdit key={item.id} item={""} />
          </div>
          </section>
        );
      })}
    </div>
  </section>
  )
}
