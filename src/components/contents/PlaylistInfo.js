import styled from "@emotion/styled";
import Colors from "../ui/Colors"

export default function PlaylistInfo({name, description, followers,img_url}) {
  return (
    <StyledPlaylistInfo>
      <img className="image__body__info" alt="Playlist.img" src={img_url ? img_url:"https://dancettradio.files.wordpress.com/2013/09/artworks-000057515096-7ajzbl-original.jpg?w=768"} />
      <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h2>{name ? name:"Discover Playlist"}</h2>
        <p>{description ? description:"Description"}</p>
      </div>
    </StyledPlaylistInfo>
  )
}

const StyledPlaylistInfo = styled.div`
  display:flex;
  color: ${Colors.white};
  padding: 24px 32px 24px 32px;
  background: linear-gradient(red,rgba(0,0,0,.5));
  & .body__infoText{
    flex: 1;
  }
  & .body__infoText > h2{
    font-size: 48px;
    margin-bottom: 10px;
  }
  & .image__body__info{
    height: 15vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.3);
  }
`;