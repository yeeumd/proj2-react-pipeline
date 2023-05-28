// import React from "react";
import { RoomType } from "../api/roomApi";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

type RoomProps = {
    room: RoomType;
};

//                                        slug (chat rooms)
export default function Room ({ room }: RoomProps) {
  // const { name, slug, images, price } = room;
  const {id, roomType} = room;
  // console.log(name);
  return (
    // 1. CONNECT TO SPRING BOOT locally AND SEE IF THIS DATA DISPLAYS
    // 2. STYLE IT
    // 3. REPEAT FOR OTHER ENDPOINTS


    // FOR AUTH
    // CREATE A LOGIN ENDPOINT WHERE YOU AUTHENTICATE (pass in username + password)
    
    // CREATE A RESERVATION DTO
    // THAT IS WAY TOO MUCH DATA TO PASS TO THE FRONTEND (user details, room info, etc.)
    // Instead, pass user id and room id back, not all the info
      // <div>{room.roomNumber} {room.roomType}</div>

    <article className="room">
      <div className="img-container">
        {/* <img src={images[0] || defaultImg} alt="single room" /> */}
        <img src={defaultImg} alt="single room"/>
        <div className="price-top">
          {/* <h6>${price}</h6> */}
          <h6>$500</h6>
          <p>per night</p>
        </div>
        {/* <Link to={`/rooms/${slug}`} className="btn-primary room-link"> */}
        <Link to={`/rooms/${roomType}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{roomType}</p>
    </article>
  );
};

// export default Room;