import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI_PLAYLIST, KEY_API } from "../../app/config"

export const fetchPlaylist = createAsyncThunk(
  "video/fetchPlaylist",
  async (Search_id) => {
    const response = await fetch(`${BASE_URI_PLAYLIST + Search_id + KEY_API}&maxResults=50` , {
      method: "GET",   
    });

  const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error("Something went wrong");
    }
    return { playlist: data };
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    items: [],
    list_id: "",
    list_name: "holamundo",
    list_img: "",
    status: "idle",
    error: null,
  },

  reducers: {
    addListImg: (state, action) => {
      state.list_img = action.payload;
    },
    addListName: (state, action) => {
      state.list_name = action.payload;
    },
    cleanupPlayList: (state) => {
      state.items= [];
      state.list_id = "";
      state.list_name = "";
      state.list_img = "";
      state.status = "idle";
    },
    addPlayListId: (state, action) => {
      state.list_id = action.payload;
    },
  },
  extraReducers: {
    [fetchPlaylist.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPlaylist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.playlist;
    },
    [fetchPlaylist.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const{
  addListImg,
  addListName,
  cleanupPlayList,
  addPlayListId,
} = playlistSlice.actions; 

export default playlistSlice.reducer;