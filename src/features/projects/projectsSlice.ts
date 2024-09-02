import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProjectCategory } from "@/enums/ProjectCategory";
import { Project } from "@/types/Project";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/projects`);

    return response.data.payload;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    config: {} as Record<ProjectCategory, Array<Project>>,
    status: "idle",
    error: undefined as undefined | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.config = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
