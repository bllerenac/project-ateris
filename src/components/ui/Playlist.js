import styled from "@emotion/styled";
import MiniCardPlay from "./MiniCardPlay";
import CardPlay from "./CardPlay";
import {LoMasEscuchado, MusicGames} from '../../app/defaultLists'

export default function Playlist(props) {

  return (
    <StyledPlaylist>
      <h1 className="title">Artistas mas escuchados</h1>
      <MiniWrapper>
        {LoMasEscuchado.map((playlist) => (
          <MiniCardPlay key={playlist.id} playlist={playlist}/>
        ))}
      </MiniWrapper>
      <h3>Musica de Videojuegos</h3>
      <YourPlaylist>
        {MusicGames.map((playlist) => (
          <CardPlay playlist_data={playlist} />
        ))}
      </YourPlaylist>
      <h3>Escuchados Recientemente</h3>
      <CurrentPlaylist>
      {LoMasEscuchado.map((playlist) => (
        <CardPlay playlist_data={playlist} />
      ))}
      </CurrentPlaylist>
      
    </StyledPlaylist>
  )
}

const StyledPlaylist = styled.div`
  width: 100%;
  padding: 30px;
  background: #121212;
  & h3{
    font-size: 26px;
  }
  & .title{
    font-size: 30px;
  }
`;

const MiniWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin: 40px 0;
`;

const YourPlaylist = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 0;
  
`;
const CurrentPlaylist = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 0;
`;