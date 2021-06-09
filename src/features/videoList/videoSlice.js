import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI, KEY_API } from "../../app/config"

export const fetchVideos = createAsyncThunk(
  "video/fetchVideos",
  async (Search) => {
    const response = await fetch(`${BASE_URI + Search + KEY_API}&maxResults=25`, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { videos: data };
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [fetchVideos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.videos;
    },
    [fetchVideos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default videosSlice.reducer;