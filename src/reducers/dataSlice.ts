import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface DataState {
  loading: boolean;
  data: any[]; // Replace `any[]` with the actual data type you're loading
  error: string | null;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

// export const selectLoading = (state: RootState) => state.data.loading;

export const selectLoading = (state: RootState) => (state.data as DataState).loading;
export const selectData = (state: RootState) => (state.data as DataState).data;
export const selectError = (state: RootState) => (state.data as DataState).error;

export default dataSlice.reducer;
