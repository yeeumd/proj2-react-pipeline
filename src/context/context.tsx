
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