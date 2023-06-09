import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RoomType } from "../api/roomApi";

export type ReservationType = {
    id: number;
    user: string;
    hotelRoom: RoomType;
    reservationStatus: string;
    reservationTime: Date;
    startDate: Date;
    endDate: Date;
}

export const reservationApi = createApi({
    reducerPath: 'reservationApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/rooms' }),
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}/reservations` }),
    endpoints: builder => ({
        getAllReservations: builder.query<ReservationType[], void>({
            query: () => '/'
        }),
        getReservationById: builder.query<ReservationType, number>({
            query: id => `/${id}`
        }),
        createReservation: builder.mutation<ReservationType, ReservationType>({
            query: room => ({
                method: 'POST',
                url: '/',
                body: room
            })
        }),
        updateReservation: builder.mutation<ReservationType, ReservationType>({
            query: room => ({
                method: 'PUT',
                url: `/${room.id}`,
                body: room
            })
        }),
        deleteReservation: builder.mutation<void, number>({
            query: id => ({
                method: 'DELETE',
                url: `/${id}`
            })
        })
    })
});

export const {
    useGetAllReservationsQuery,
    useGetReservationByIdQuery,
    useCreateReservationMutation,
    useUpdateReservationMutation,
    useDeleteReservationMutation
} = reservationApi;