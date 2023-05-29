import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type RoomType = {
    id?: number;
    roomNumber?: string;
    roomType?: string;
    availabilityStatus?: string;
    price: number;
    pictureUrl: string;
}

export const roomApi = createApi({
    reducerPath: 'roomApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}/rooms` }),
    // baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}/hello` }),
    endpoints: builder => ({
        getAllRooms: builder.query<RoomType[], void>({
            query: () => '/'
        }),
        getRoomById: builder.query<RoomType, number>({
            query: id => `/${id}`
        }),
        createRoom: builder.mutation<RoomType, RoomType>({
            query: room => ({
                method: 'POST',
                url: '/',
                body: room
            })
        }),
        updateRoom: builder.mutation<RoomType, RoomType>({
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