import React from 'react';

interface RoomProps {
  id: string;
  name: string;
  type: string;
  images: string[];
  price: number;
}

interface RoomsListProps {
  rooms: RoomProps[];
}

const Room = ({ item }: RoomProps) => {
  // Render logic for Room component
  return <div>{item.name}</div>;
};

const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately, no rooms matched your search parameters.</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => (
          <Room key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;


// import React from "react";
// import Room from "./Room";
// import { useSelector } from "react-redux";


//   interface rooms {
//     id: string,
//     name: string,
//     type: string,
//     images: string[],
//     price: number
//   }
// const RoomsList = () => {
//     const rooms = useSelector((store: any) => store.rooms);
//   if (rooms.length === 0) {
//     return (
//       <div className="empty-search">
//         <h3>unfortunately no rooms matched your search parameters</h3>
//       </div>
//     );
//   }
//   return (
//     <section className="roomslist">
//       <div className="roomslist-center">
//         {rooms.map((item:room) => {
//           return <Room key={item.id} item={item} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default RoomsList;