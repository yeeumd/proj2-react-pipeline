import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Room = {
    id: number;
    roomNumber: string;
    roomType: string;
    availabilityStatus: string;
}

export const roomApi = createApi({
    reducerPath: 'roomApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}/rooms` }),
    // baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}/hello` }),
    endpoints: builder => ({
        getAllRooms: builder.query<Room[], void>({
            query: () => '/'
        }),
        getRoomById: builder.query<Room, number>({
            query: id => `/${id}`
        }),
        createRoom: builder.mutation<Room, Room>({
            query: room => ({
                method: 'POST',
                url: '/',
                body: room
            })
        }),
        updateRoom: builder.mutation<Room, Room>({
            query: room => ({
                method: 'PUT',
                url: `/${room.id}`,
                body: room
            })
        }),
        deleteRoom: builder.mutation<void, number>({
            query: id => ({
                method: 'DELETE',
                url: `/${id}`
            })
        })
    })
});

export const {
    useGetAllRoomsQuery,
    useGetRoomByIdQuery,
    useCreateRoomMutation,
    useUpdateRoomMutation,
    useDeleteRoomMutation
} = roomApi;