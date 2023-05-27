import { createSlice } from '@reduxjs/toolkit'

type room = {
  name: string,
  type: string,
  images: string[],
  price: number
};

const roomReducer = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [],
        sortedRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
    },
    reducers: {
        filterRooms: (state) => {
            let tempRooms = [...state.rooms];

            if (state.type !== "all") {
              tempRooms = tempRooms.filter(room => room.type === state.type);
            }
            if (state.capacity !== 1) {
              tempRooms = tempRooms.filter(room => room.capacity >= state.capacity);
            }
            state.sortedRooms = tempRooms;
          },
        set: (state, action) => {
          state.rooms = action.payload;
        }
    }
});

export const { filterRooms, set } = roomReducer.actions;
export default roomReducer.reducer;