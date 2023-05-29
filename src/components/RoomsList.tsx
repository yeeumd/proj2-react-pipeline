import { RoomType,useGetAllRoomsQuery } from '../api/roomApi';
import Room from './Room';
import Loading from './Loading';
import Error from '../pages/ErrorPage';

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
    const { data: rooms, error, isLoading}  =  useGetAllRoomsQuery(); 
    // dispatch(fetchDataSuccess(fetchedData));
  // } catch (tryError) {
    // dispatch(fetchDataFailure(dispatchError));
    // throw new tryError('Failed to fetch data');
  // }

  if (isLoading) {
    return <Loading />;
  }

  if (error || !Array.isArray(rooms)) {
    return <div>Error Message</div>
  }

// console.log(error);

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
    </>
  )
}


