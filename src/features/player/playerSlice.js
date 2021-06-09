import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
      items: [],
      song_status: "2",
      song_id: "",
      status: "idle",
      error: null,
    },
  
    reducers: {
      cleanStatus:(state) => {
        state.song_status = "";
      },
      cleanupPlayer: (state) => {
        state.song_id = "";
      },
      setStatusSong: (state, action) => {
        state.song_status = action.payload;
      },
      addSongId: (state, action) => {
        state.song_id = action.payload;
      },
    },
  });
  
  export const{
    cleanStatus,
    cleanupPlayer,
    setStatusSong,
    addSongId,
  } = playerSlice.actions; 
  
  export default playerSlice.reducer;