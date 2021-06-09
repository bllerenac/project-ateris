/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function RenderSongName(song_id, video_id, song_status, name){
    if(song_id === video_id && song_status === "1"){
      return(<p id={`song_name`} css={css`color: #00B050 !important;`}>{name ? name:"NameSong"}</p>)
    }else if(song_id === video_id && song_status === "2"){
      return(<p id={`song_name`} css={css`color: #00B050 !important;`}>{name ? name:"NameSong"}</p>)
    }else{
      return(<p id={`song_name`}>{name ? name:"NameSong"}</p>)
    }
}

export default RenderSongName;