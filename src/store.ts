import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './reducers/roomReducer';
import dataReducer from './reducers/dataSlice';
import userReducer from "./reducers/userReducer";
import { roomApi } from './api/roomApi';
import { userApi } from './api/userApi';
import { reservationApi } from './api/reservationApi';


const store = configureStore({
    reducer: {
        rooms: roomReducer,
        [roomApi.reducerPath]: roomApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [reservationApi.reducerPath]: reservationApi.reducer,
        data: dataReducer,
        user: userReducer,
        // cart
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(roomApi.middleware)
                                                        .concat(userApi.middleware)
                                                        .concat(reservationApi.middleware)
});

export default store;
export type RootState = ReturnType<typeof store.getState>