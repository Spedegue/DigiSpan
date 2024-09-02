import { configureStore } from "@reduxjs/toolkit";
import testimonialsSlice from "@/features/testimonials/testimonialsSlice";
import navIntersectionSlice from "@/features/navIntersection/navIntersectionSlice";
import projectsSlice from "@/features/projects/projectsSlice";

const store = configureStore({
  reducer: {
    testimonials: testimonialsSlice,
    navIntersection: navIntersectionSlice,
    projects: projectsSlice,
  },
});

export default store;
