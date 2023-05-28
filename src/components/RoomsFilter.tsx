// import React from "react";
// import { RoomType,useGetAllRoomsQuery } from '../api/roomApi';

// import { useContext } from "react";
// import { RoomContext } from "../context";

// import Title from "./Title";
// import { useSelector } from 'react-redux'

// type item = {
//     name: string,
//     type: string,
//     images: string[],
//     price: number,
//     value: number[]
//   };

// // get all unique values
// const getUnique = (items:string, value:number) => {
//   return [...new Set(items.map((item:item) => item[value]))];
// };

// const RoomsFilter = () => {
//   // react hooks
// //   const store = useContext(RoomContext);
// const rooms = useSelector((store: any) => store.rooms);
// //   const {
// //     handleChange,
// //     type,
// //     capacity,
// //     price,
// //   } = context;

//   // get unique types
//   let types = getUnique(rooms, "type");
//   // add all
//   types = ["all", ...types];
//   // map to jsx
//   types = types.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));
//   // get unique capacity
//   let people = getUnique(rooms, "capacity");
//   people = people.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));
//   return (
//     <section className="filter-container">
//       <Title title="search rooms" />
//       <form className="filter-form">
//         {/* select type */}
//         <div className="form-group">
//           <label htmlFor="type">room type</label>
//           <select
//             name="type"
//             id="type"
//             onChange={handleChange}
//             className="form-control"
//             value={type}
//           >
//             {types}
//           </select>
//         </div>
//         {/* end of select type */}
//         {/* guests  */}
//         <div className="form-group">
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
//         </div>
//         {/* end of guests */}



//       </form>
//     </section>
//   );
// };

// export default RoomsFilter;