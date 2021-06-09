/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function RenderIdEqual(song_id, video_id, song_status,  position){
    if(song_id === video_id && song_status === "1"){
      return(<>
        <p id={`song_${video_id}`} className="song_id hide">{position+1}</p>
        <img id={`equal_${video_id}`} className="song_equal" alt="equal.img" css={css`width: 14px; height: 14px;`} src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif" />
      </>)
    }else if(song_id === video_id && song_status === "2"){
      return(<>
        <p id={`song_${video_id}`} className="song_id" css={css`color: #00B050 !important;`}>{position+1}</p>
        <img id={`equal_${video_id}`} className="song_equal hide" alt="equal.img" css={css`width: 14px; height: 14px;`} src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif" />
      </>)
    }else{
      return(
        <>
          <p id={`song_${video_id}`} className="song_id">{position+1}</p>
          <img id={`equal_${video_id}`} className="song_equal hide" alt="equal.img" css={css`width: 14px; height: 14px;`} src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif" />
        </>
      )
    }
  }

export default RenderIdEqual;  