import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    language: string;
    timezone: Date;
    password: string;
    role: string;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URI}/users` }),
    endpoints: builder => ({
        getAllUsers: builder.query<User[], void>({
            query: () => '/'
        }),
        getUserById: builder.query<User, number>({
            query: id => `/${id}`
        }),
        register: builder.mutation<User, User>({
            query: user => ({
                method: 'POST',
                url: '/',
                body: user
            })
        }),
        // not allowed to self update
        // updateRoom: builder.mutation<User, User>({
        //     query: user => ({
        //         method: 'PUT',
        //         url: `/${room.id}`,
        //         body: user
        //     })
        // }),
        deleteUser: builder.mutation<void, number>({
            query: id => ({
                method: 'DELETE',
                url: `/${id}`
            })
        })
    })
});

export const {
    useGetAllUsersQuery,
    useGetUserByIdQuery,
    useRegisterMutation,
    useDeleteUserMutation
} = userApi;