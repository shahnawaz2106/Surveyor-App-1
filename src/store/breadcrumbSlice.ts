// src/store/breadcrumbSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BreadcrumbState {
  breadcrumbData: Array<{ location: string; level: string }>;
}

const initialState: BreadcrumbState = {
  breadcrumbData: [],
};

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState,
  reducers: {
    updateBreadcrumbData: (state, action: PayloadAction<{ location: string; level: string }>) => {
      state.breadcrumbData.push(action.payload);
    },
  },
});

export const { updateBreadcrumbData } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
