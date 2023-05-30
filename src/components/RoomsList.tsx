import { RoomType, useGetAllRoomsQuery } from '../api/roomApi';
import Room from './Room';
import Error from '../pages/ErrorPage';
import { useState } from 'react';
import loading from '../images/gif/loading-arrow.gif';
import { DatePicker} from '@mui/lab';
import { TextField} from '@mui/material';
import { Box } from '@mui/system';
import { DateRange } from '@mui/lab/DateRangePicker';

export default function RoomList() {
  const [page, setPage] = useState(1);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Date>>(null);

  function checkPage() {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  const { data: rooms, error, isLoading, isFetching } = useGetAllRoomsQuery(page);

  if (isLoading) {
    return <div><img src={loading} alt="loading" /></div>;
  }

  if (error || !Array.isArray(rooms)) {
    return <div>Error Message</div>;
  }

  const handleDateRangeChange = (newValue: DateRange<Date>) => {
    setSelectedDateRange(newValue);
  };

  // const filterRoomsByDateRange = (room: RoomType) => {
  //   if (!selectedDateRange) {
  //     return true;
  //   }
  //   const { startDate, endDate } = selectedDateRange;
  //   return room.startDate >= startDate && room.endDate <= endDate;
  // };

  // const filteredRooms = rooms.filter(filterRoomsByDateRange);

  return (
    <>
    <div>hello</div>
    
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <DatePicker
          label="Select Date Range"
          value={selectedDateRange}
          onChange={handleDateRangeChange}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="dd/MM/yyyy"
          mask="__/__/____"
        />
      </Box>

      {/* {filteredRooms.map((room) => ( */}
      {rooms.map((room) => (
        <section className="roomslist" key={room.id}>
          <div className="roomslist-center">
            <Room room={room} />
          </div>
        </section>
      ))}

      <span style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={checkPage} style={{ marginRight: '10px' }}>
          Previous
        </button>
        <div style={{ marginRight: '10px' }}>{page}</div>
        <button onClick={() => setPage(page + 1)} style={{ marginRight: '10px' }}>
          Next
        </button>
      </span>
    </>
  );

      };
// import { RoomType, useGetAllRoomsQuery } from '../api/roomApi';
// import Room from './Room';
// // import Loading from './Loading';
// import Error from '../pages/ErrorPage';
// import { useState } from 'react';
// import loading from '../images/gif/loading-arrow.gif'
// import { DatePicker } from '@mui/lab';
// import { TextField, Button } from '@mui/material';


// export default function RoomList() {
//   const [page, setPage] = useState(1)

//   function checkPage() {
//     if (page == 1) {
//       setPage(1);
//     } else {
//       setPage(page - 1);
//     }
//   }

//   const { data: rooms, error, isLoading, isFetching } = useGetAllRoomsQuery(page);
 
//   if (isLoading) {
//     return <div><img src={loading} alt="loading" /></div>;
//   }

//   if (error || !Array.isArray(rooms)) {
//     return <div>Error Message</div>
//   }

//   return (
//     <>
//       {rooms.map(room => {
//         return (

//           <section className="roomslist">
//             <div className="roomslist-center">
//               <Room key={room.id} room={room} />
//             </div>
//           </section>

//         );
//       })}
//       <span style={{ display: 'flex', alignItems: 'center' }}>
//         <button
//           onClick={() => checkPage()}
//           style={{ marginRight: '10px' }}
//         >
//           Previous
//         </button>
//         <div style={{ marginRight: '10px' }}>{page}</div>
//         <button
//           onClick={() => setPage(page + 1)}
//           style={{ marginRight: '10px' }}
//         >
//           Next
//         </button>
//       </span>

//     </>
//   )
// }


