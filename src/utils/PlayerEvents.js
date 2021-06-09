function onPlayPause(e, queryVideo){
    const video_state = queryVideo.getPlayerState();
    if(video_state===2 || video_state===0){
      queryVideo.playVideo();
    }else{
      queryVideo.pauseVideo();
    }
} 

export default onPlayPause;
