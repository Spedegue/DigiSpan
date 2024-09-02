import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/testimonials`);
    return response.data.payload;
  }
);

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    items: [],
    status: "idle",
    error: undefined as undefined | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default testimonialsSlice.reducer;
