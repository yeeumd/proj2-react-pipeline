// import React from 'react';

// interface RoomProps {
//   id: string;
//   name: string;
//   type: string;
//   images: string[];
//   price: number;
// }

// interface RoomsListProps {
//   rooms: RoomProps[];
// }

// const Room = (item: RoomProps) => {
//   // Render logic for Room component
//   return <div>{item.name}</div>;
// };

// const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
//   if (rooms.length === 0) {
//     return (
//       <div className="empty-search">
//         <h3>Unfortunately, no rooms matched your search parameters.</h3>
//       </div>
//     );
//   }

//   return (
//     <section className="roomslist">
//       <div className="roomslist-center">
//         {rooms.map((item) => (
//           <Room key={item.id} rooms={rooms} />
//         ))}
//       </div>
//     </section>
//   );
// };

// // export default RoomsList;
// // import React from "react";
// import Room from "./Room";
// // import { useSelector } from "react-redux";
// // import { RoomType } from "../api/roomApi";
// import { RoomType,useGetAllRoomsQuery } from '../api/roomApi';
// const { data: rooms, refetch, isLoading } = useGetAllRoomsQuery();

// // type RoomProps = {
// //   room: RoomType;
// // };
// // interface RoomListProps {
// //   rooms: RoomType[];
// // }
//   // interface room {
//   //   id: string,
//   //   name: string,
//   //   type: string,
//   //   images: string[],
//   //   price: number
//   // }
// const RoomsList = () => {
//     // const rooms = useSelector((store: any) => store.room);
//   if (rooms?.length === 0) {
//     return (
//       <div className="empty-search">
//         <h3>unfortunately no rooms matched your search parameters</h3>
//       </div>
//     );
//   }
//   return (
//     <section className="roomslist">
//       <div className="roomslist-center">
//         {/* {rooms.map((item:RoomType) => {
//           <Room key={item.id} room={item} />;
//         })} */}
//               {rooms?.map(room => {
//         return (
//           <>
//           <Room key={room.id} room={room} />
//           </>
//         );
//       })}
//       </div>
//     </section>
//   );
// };

// export default RoomsList;

import { RoomType,useGetAllRoomsQuery } from '../api/roomApi';
import Room from './Room';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDataStart, selectLoading, selectData, selectError } from './dataSlice';
// import Loading from "./Loading";

export default function RoomList() {

  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const data = useSelector(selectData);
  // const dispatchError = useSelector(selectError);

  // try {
    // Dispatch an action to start loading data
    // dispatch(fetchDataStart());
    const { data: rooms, error }  =  useGetAllRoomsQuery(); 
    // dispatch(fetchDataSuccess(fetchedData));
  // } catch (tryError) {
    // dispatch(fetchDataFailure(dispatchError));
    // throw new tryError('Failed to fetch data');
  // }
  // const { data: rooms, error } = useGetAllRoomsQuery();
console.log(error);

  return (
    <>
      {rooms?.map(room => {
        return (
          <section className="roomslist">
            <div className="roomslist-center">
          <Room key={room.id} room={room} />
          </div>
          </section>
        );
      })}
    </>
  )
}


