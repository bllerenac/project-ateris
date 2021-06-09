import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../features/videoList/videoSlice";
import {cleanupPlayList} from "../features/playList/playlistSlice"
import Body from '../components/contents/Body'

export default function Home() {
 const dispatch = useDispatch();
 const status = useSelector((state) => state.videos.status);
 dispatch(cleanupPlayList());

  if (status === "idle") {
    dispatch(fetchVideos("coldplay"));
  }

  return (
    <Body/>
  )
}