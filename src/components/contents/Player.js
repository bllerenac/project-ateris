import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";  
import { setStatusSong } from "../../features/player/playerSlice"
import styled from "@emotion/styled";
import YouTube from 'react-youtube';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { IoIosHeartEmpty } from 'react-icons/io'
import { CgMiniPlayer }from 'react-icons/cg'
import { Grid } from 'semantic-ui-react'

import PlayPauseRender from '../ui/Player/playerPlay';
import onPlayPause from '../../utils/PlayerEvents'
import './styles.css'


function Player(){
  const dispatch = useDispatch();
  const [ queryVideo, setQueryVideo ] = useState();
  const song_id = useSelector((state) => state.player.song_id);
  const song_status = useSelector((state) => state.player.song_status);
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  if(song_status === "1" && queryVideo != null){
    queryVideo.playVideo();
  }else if(song_status === "2" && queryVideo != null){
    queryVideo.pauseVideo();
  }

  const onReady= (e) => {
    setQueryVideo(e.target);
    e.target.pauseVideo();
  }

  const onState = (e) =>{
    if(e.data === 1){
      dispatch(setStatusSong("1"))
    }else{
      dispatch(setStatusSong("2"))
    }
  }

  return(
      <Grid className='player'>
        <Grid.Row>
          <Grid.Column width='4'>
            <img className='album_image' alt='album_image' src=''/>
            <IoIosHeartEmpty color='white' size='16px'/>
            <CgMiniPlayer color='white' size='16px'/>
          </Grid.Column>

          <Grid.Column width='8'>
            <YouTube containerClassName={"video_audio"} videoId={song_id} opts={opts} id={"test"} onReady={onReady} onStateChange={onState} />
            <StyledControl>
              <BiSkipPrevious color='white' size='30px'/>
              <StyledPlay id="controls_footer" onClick={(e) => onPlayPause(e, queryVideo)}>
                {PlayPauseRender(song_status)}
              </StyledPlay>
              <BiSkipNext color='white' size='30px'/>
            </StyledControl>
          </Grid.Column>

          <Grid.Column width='4'>

          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
}

const StyledControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const StyledPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover{
    transform: scale(1.1);
  }
`;

export default Player;