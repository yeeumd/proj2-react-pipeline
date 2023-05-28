import { configureStore } from '@reduxjs/toolkit';
import roomReducer from "./reducers/roomReducer";
import { roomApi } from './api/roomApi';
import { userApi } from './api/userApi';

const store = configureStore({
    reducer: {
        rooms: roomReducer,
        [roomApi.reducerPath]: roomApi.reducer,
        [userApi.reducerPath]: userApi.reducer
        // cart
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(roomApi.middleware)
                                                        .concat(userApi.middleware)
});

export default store;
export type RootState = ReturnType<typeof store.getState>