// import React, { createContext, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { RootState } from "../store";
// // import { fetchRooms } from "../actions/roomActions";
// import items from "../data/data.js"

// interface RoomProviderProps {
//   children: React.ReactNode;
// }

// type Room = {
//     name: string,
//     slug: string,
//     images: string[],
//     price: number
// };

// type RoomContext = {
//     filterRooms: () => Room[]
// }

// const RoomContext = createContext({} as RoomContext);

// const RoomProvider: React.FC<RoomProviderProps> = ({ children }) => {
//   const dispatch = useDispatch();
//   const {
//     rooms,
//     sortedRooms,
//     loading,
//     type,
//     capacity,
//     price
//   } = useSelector((state: RootState) => state.room);

//   useEffect(() => {
//     dispatch(fetchRooms());
//   }, [dispatch]);

//   const formatData = (items: any) => {
//     let tempItems = items.map((item: any) => {
//       let id = item.sys.id;
//       let images = item.fields.images.map((image: any) => image.fields.file.url);

//       let room = { ...item.fields, images, id };
//       return room;
//     });
//     return tempItems;
//   };

//   const getRoom = (slug: string) => {
//     let tempRooms = [...rooms];
//     const room = tempRooms.find((room) => room.slug === slug);
//     return room;
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     // Dispatch an action to update the Redux store
//     dispatch({
//       type: "UPDATE_FILTERS",
//       payload: { [name]: value },
//     });
//   };

//   const filterRooms = () => {
//     let tempRooms = [...rooms];
//     let updatedRooms = tempRooms;

//     const parsedCapacity = parseInt(capacity);
//     // const parsedPrice = parseInt(price);

//     if (type !== "all") {
//       updatedRooms = updatedRooms.filter((room) => room.type === type);
//     }

//     if (parsedCapacity !== 1) {
//       updatedRooms = updatedRooms.filter((room) => room.capacity >= parsedCapacity);
//     }

//     // updatedRooms = updatedRooms.filter((room) => room.price <= parsedPrice);

//     // updatedRooms = updatedRooms.filter(
//     //   (room) => room.size >= minSize && room.size <= maxSize
//     // );

//     // if (breakfast) {
//     //   updatedRooms = updatedRooms.filter((room) => room.breakfast === true);
//     // }

//     // if (pets) {
//     //   updatedRooms = updatedRooms.filter((room) => room.pets === true);
//     // }

//     // Dispatch an action to update the sortedRooms in the Redux store
//     dispatch({
//       type: "UPDATE_SORTED_ROOMS",
//       payload: updatedRooms,
//     });
//   };

//   return (
//     <RoomContext.Provider
//       value={{
//         rooms,
//         sortedRooms,
//         loading,
//         type,
//         capacity,
//         price,
//         getRoom,
//         handleChange,
//       }}
//     >
//       {children}
//     </RoomContext.Provider>
//   );
// };

// export { RoomProvider, RoomContext };




import React, { Component } from "react";
import items from "../data/data";

type room = {
    id: string,
    name: string,
    type: string,
    images: string,
    price: number
};

type RoomContext = {
  getRoom: () => room[]
  filterRoom: () => room[]
  rooms: room[],
  sortedRooms: room[],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0
}

const RoomContext = React.createContext({} as RoomContext);

export default class RoomProvider extends Component {
  // state = {
  //   rooms: [],
  //   sortedRooms: [],
  //   loading: true,
  //   //
  //   type: "all",
  //   capacity: 1,
  //   price: 0
  // };

 

  // componentDidMount() {
  //   // this.getData();
  //   let rooms = this.formatData(items);
  //   //

  //   this.setState({
  //     rooms,
  //     sortedRooms: rooms,
  //     loading: false,
  //   });
  // }

  // type itemType = {
  //   id: "1",
  //   name: "single economy",
  //   slug: "single-economy",
  //   type: "single",
  //   price: 100,
  //   size: 200,
  //   capacity: 1,
  //   images: img1
  // }
// formatData(items: any[]) {
//     let tempItems = items.map(item => {
//       let id = item.id;
//       let images = item.images;

//       let room = { ...item, images, id };
//       return room;
//     });
//     return tempItems;
//   }

  // getRoom(slug: string) {
  //   let tempRooms = [...state.rooms];
  //   const room = tempRooms.find(room => room.slug === slug);
  //   return room;
  // };

  // handleChange = event => {
  //   const target = event.target;
  //   // ternary on value only because we have checkbox types
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   console.log(name, value);

  //   this.setState(
  //     {
  //       [name]: value
  //     },
  //     this.filterRooms
  //   );
  // };

//   filterRooms = () => {
//     let {
//       rooms,
//       type,
//       capacity,
//       price,
//       minSize,
//       maxSize,
//       breakfast,
//       pets
//     } = this.state;

//     let tempRooms = [...rooms];
//     // transform values
//     // get capacity
//     capacity = parseInt(capacity);
//     price = parseInt(price);
//     // filter by type
//     if (type !== "all") {
//       tempRooms = tempRooms.filter(room => room.type === type);
//     }
//     // filter by capacity
//     if (capacity !== 1) {
//       tempRooms = tempRooms.filter(room => room.capacity >= capacity);
//     }
//     // filter by price
//     tempRooms = tempRooms.filter(room => room.price <= price);
//     //filter by size
//     tempRooms = tempRooms.filter(
//       room => room.size >= minSize && room.size <= maxSize
//     );
//     //filter by breakfast
//     if (breakfast) {
//       tempRooms = tempRooms.filter(room => room.breakfast === true);
//     }
//     //filter by pets
//     if (pets) {
//       tempRooms = tempRooms.filter(room => room.pets === true);
//     }
//     this.setState({
//       sortedRooms: tempRooms
//     });
//   };
//   render() {
//     return (
//       <RoomContext.Provider
//         value={{
//           ...this.state,
//           getRoom: this.getRoom,
//           handleChange: this.handleChange
//         }}
//       >
//         {this.props.children}
//       </RoomContext.Provider>
//     );
//   }
// }
// const RoomConsumer = RoomContext.Consumer;

// export { RoomProvider, RoomConsumer, RoomContext };

// // Higher order component
// export function withRoomConsumer(Component:any) {
//   return function ConsumerWrapper(props:any) {
//     return (
//       <RoomConsumer>
//         {value => <Component {...props} context={value} />}
//       </RoomConsumer>
//     );
//   };
}