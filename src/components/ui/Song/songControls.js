import Icons from '../Icons'

function RenderSongControls(song_id, video_id, song_status){
    if(song_id === video_id && song_status === "1"){
      return(<>
          <img alt="play_filled.svg" src={Icons.play_filled} className="play hide"/>
          <img alt="play_filled.svg" className="pause" src={Icons.stop}/>
      </>)
    }else{
      return(<>
        <img alt="play_filled.svg" src={Icons.play_filled} className="play"/>
        <img alt="play_filled.svg" className="pause hide" src={Icons.stop}/>
      </>)
    }
}

export default RenderSongControls;