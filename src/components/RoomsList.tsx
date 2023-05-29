import { RoomType, useGetAllRoomsQuery } from '../api/roomApi';
import Room from './Room';
// import Loading from './Loading';
import Error from '../pages/ErrorPage';
import { useState } from 'react';
import loading from '../images/gif/loading-arrow.gif'


// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDataStart, selectLoading, selectData, selectError } from './dataSlice';
// import Loading from "./Loading";

export default function RoomList() {
  const [page, setPage] = useState(1)

  function checkPage() {
    if (page == 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const data = useSelector(selectData);
  // const dispatchError = useSelector(selectError);

  // try {
  // Dispatch an action to start loading data
  // dispatch(fetchDataStart());
  const { data: rooms, error, isLoading, isFetching } = useGetAllRoomsQuery(page);
  // console.log(error);
  // dispatch(fetchDataSuccess(fetchedData));
  // } catch (tryError) {
  // dispatch(fetchDataFailure(dispatchError));
  // throw new tryError('Failed to fetch data');
  // }

  if (isLoading) {
    return <div><img src={loading} alt="loading" /></div>;
  }

  if (error || !Array.isArray(rooms)) {
    return <div>Error Message</div>
  }

  return (
    <>
      {rooms.map(room => {
        return (

          <section className="roomslist">
            <div className="roomslist-center">
              <Room key={room.id} room={room} />
            </div>
          </section>

        );
      })}
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => checkPage()}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
        <div style={{ marginRight: '10px' }}>{page}</div>
        <button
          onClick={() => setPage(page + 1)}
          style={{ marginRight: '10px' }}
        >
          Next
        </button>
      </span>

    </>
  )
}


