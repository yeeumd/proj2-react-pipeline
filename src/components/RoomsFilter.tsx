
import React, { useState } from "react";
import { RoomType, useGetAllRoomsQuery } from '../api/roomApi';
import { useCreateReservationMutation } from '../api/reservationApi'
import Loading from './Loading';
import Error from '../pages/ErrorPage';
import Title from '../components/Title';
import Room from './Room'

const RoomFilter: React.FC = () => {
const { data: rooms, isLoading, error } = useGetAllRoomsQuery(1);
  const [roomType, setRoomType] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  function checkPage() {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }
  // start calander
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Handle the selected date
    console.log(selectedDate);
  };
  // end calander
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
  // console.log(rooms);
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


    const makeReservation = async ({room}) => {
      const startDate = document.getElementById('start') as HTMLInputElement;
      const endDate = document.getElementById('end') as HTMLInputElement;
      console.log(room.id);
      console.log(new Date(startDate.value).toISOString());
      console.log(new Date(endDate.value).toISOString());
      console.log(new Date().toISOString());
      const reservationData = {
        "user": {
          "id": 1
        },
        "hotelRoom":{id:room.id},
        "reservationStatus": "BOOKED",
        "reservationTime": "2023-05-26T10:00:00.000+00:00",
        "startDate": new Date(endDate.value).toISOString(),
        "endDate": new Date(startDate.value).toISOString()
      };
    
      try {
        const response = await fetch('http://localhost:8080/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reservationData)
        });
    
        if (response.ok) {
          console.log('Reservation made successfully!');
          // Handle success scenario here
        } else {
          console.log('Failed to make a reservation.');
          // Handle error scenario here
        }
      } catch (error) {
        console.log('An error occurred while making the reservation:', error);
        // Handle error scenario here
      }
    };
    

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form" style={{ marginTop: '20px' }}>

        <div className="form-group">
          <label htmlFor="start">Start date:</label>

          <input type="date" id="start" name="trip-start"
            value="2023-06-29"
            min="2023-05-29" max="2023-12-31" />
          <label htmlFor="start">Start date:</label>

          <input type="date" id="end" name="trip-end"
            value="2023-06-30"
            min="2023-05-30" max="2023-12-31" />
          {/* <div>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div> */}
          <label htmlFor="type">Room Type:</label>
          <select
            value={roomType || ""}
            name="type"
            id="type"
            onChange={handleRoomTypeChange}
            className="form-control"
          >
            <option value="">All</option>
            {/* Add other room type options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Max Price:</label>
          <input type="number" value={maxPrice || ""} onChange={handleMaxPriceChange} />
        </div>
      </form>
      <ul style={{ marginTop: '20px' }}>
        {filteredRooms?.map((room: RoomType) => (
          <section className="roomslist" key={room.id} onClick={() => makeReservation({room}) }>
            <div className="roomslist-right" style={{ marginBottom: '20px' }}  >
              <Room room={room} />
            </div>
          </section>
        ))}
      </ul>

      <span style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={checkPage} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <div style={{ marginRight: '10px' }}>{page}</div>
        <button onClick={() => setPage(page + 1)} style={{ marginRight: '10px' }}>
          Next
        </button>
      </span>
    </section>


  );
};

export default RoomFilter;
