/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from '@emotion/styled';
import Colors from '../ui/Colors';
import Song from '../ui/Song';

export default function PlaylistSongs({song_data}) {
  return (
    <StyledPlaylist>
      <ListHeadings>
        <p>#</p>
        <p>TÍTULO</p>
        <p>ARTISTA</p>
        <p>AGREGADO EL</p>
        <HeadTime>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" fill={Colors.grey_2}>
            </path>
          </svg>
        </HeadTime>
      </ListHeadings>
      {song_data.map((song) => {
        return(
          <Song key={song.snippet.position} 
          name={song.snippet.title} 
          position={song.snippet.position} 
          img_url={song.snippet.thumbnails.high.url}
          date={song.contentDetails.videoPublishedAt} 
          artist_name={song.snippet.videoOwnerChannelTitle}
          album_name={song.snippet.videoOwnerChannelTitle} 
          video_id={song.snippet.resourceId.videoId}/>
        );
      })}
    </StyledPlaylist>
  )
}

const StyledPlaylist = styled.div`
  height: calc(100% - 104px);
  width: 100%;
  padding: 32px;
`;

const ListHeadings = styled.div`
  display: grid;
  height: 36px;
  padding: 0 16px;
  grid-gap: 16px;
  grid-template-columns: [index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr);
  border-bottom: 1px solid hsla(0,0%,100%,.1);
  margin-bottom: 16px;
  & p {
    font-family: 'Milliard Book';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: normal;
    text-transform: none;
    color: ${Colors.grey_2};
  }
`
const HeadTime = styled.div`
    display: flex;
    padding-right: 32px;
    justify-self: end;
    -webkit-box-align: center;
    align-items: center;
    grid-column: last;
`;