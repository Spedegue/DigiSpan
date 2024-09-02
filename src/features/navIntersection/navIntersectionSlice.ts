import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const navIntersectionSlice = createSlice({
  name: "navIntersection",
  initialState,
  reducers: {
    setNavIntersection: (state, action: PayloadAction<boolean>) =>
      action.payload,
  },
});

export const { setNavIntersection } = navIntersectionSlice.actions;

export default navIntersectionSlice.reducer;
