import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videoList/videoSlice";
import playlistReducer from "../features/playList/playlistSlice"
import playerReducer from "../features/player/playerSlice"
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: {
    videos: videosReducer,
    playlist: playlistReducer,
    player: playerReducer,
    search: searchReducer,
  },
});