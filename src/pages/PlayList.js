import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist } from '../features/playList/playlistSlice'
import styled from "@emotion/styled";
import PlaylistInfo from '../components/contents/PlaylistInfo';
import PlaylistSongs from '../components/contents/PlaylistSongs';
import Header from '../components/contents/Headers/Header'

function PlayList (){
    const dispatch = useDispatch();
    const list = useSelector((state) => state.playlist.items);
    const list_id = useSelector((state) => state.playlist.list_id);
    const list_name = useSelector((state) => state.playlist.list_name);
    const list_img = useSelector((state) => state.playlist.list_img);
    const status = useSelector((state) => state.playlist.status);
    console.log(list)
    if (status === "idle") {
        dispatch(fetchPlaylist(list_id));
    }

    return(
        
        <StyledDiv>
            <Header/>
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && (<p>failed</p>)}
            {status === "succeeded" && (
                <PlayListContent>
                    <PlaylistInfo name={list_name} img_url={list_img} />
                    <DivContent>
                        <PlaylistSongs song_data={list.items} />
                    </DivContent>
                </PlayListContent>
            )}
        </StyledDiv>
    );
}

export default PlayList;

const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
`;
//const TestDiv = styled.div`
//    height: 232px;
//    width: 100%;
//    float: left;
//    background-color: rgb(216, 40, 48);
//    background-clip: padding-box;
//    background-image: linear-gradient(rgba(0,0,0,.6),#121212);
//`;

const DivContent = styled.div`
    height: auto;
    background: #121212;
    isolation: isolate;
`;

const PlayListContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;